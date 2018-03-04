import { config } from '@creditkarma/dynamic-config'
import { loadSchema } from '@creditkarma/graphql-loader'
import { executableSchemaFromModules } from '@creditkarma/graphql-loader'
import { graphiqlHapi, graphqlHapi } from 'apollo-server-hapi'
import { GraphQLSchema } from 'graphql'
import { Request, Server } from 'hapi'

import * as plugins from './plugins'

import { getCatalogModule } from './modules/catalog'
import { getInventoryModule } from './modules/inventory'

const serverConnect = (server: Server) => (schema: GraphQLSchema): Promise<GraphQLSchema> => {
    return new Promise(async (resolve, reject) => {
        server.connection({
            host: '0.0.0.0',
            port: await config().getWithDefault('port', process.env.PORT || 3000),
        })
        resolve(schema)
    })
}

const graphqlOptions = (schema: GraphQLSchema) => (request: Request) => ({
    pretty: true,
    schema,
    context: {
        headers: request.headers,
    },
})

const registerGQLRoutes = (server: Server) => async (schema: GraphQLSchema) => {
    const options = graphqlOptions(schema)
    return server.register([
        await plugins.good(),
        plugins.graphql(options),
        plugins.graphiql,
    ])
}

const startServer = (server: Server) => () => {
    server.start((err) => {
        if (err) {
            throw err
        }
        server.log('info', `Server running at: ${server.info ? server.info.uri : 'UNKOWN'}`)
    })
}

const hapi = new Server()

Promise.all([getCatalogModule, getInventoryModule])
    .then(executableSchemaFromModules)
    .then(serverConnect(hapi))
    .then(registerGQLRoutes(hapi))
    .then(startServer(hapi))
