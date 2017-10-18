import { loadSchema } from '@creditkarma/graphql-loader'
import { executableSchemaFromModules } from '@creditkarma/graphql-loader'
import { graphiqlHapi, graphqlHapi } from 'apollo-server-hapi'
import { GraphQLSchema } from 'graphql'
import { Server } from 'hapi'

import { getCatalogModule } from './modules/catalog'

const serverConnect = (server: Server) => (schema: GraphQLSchema) => {
    return new Promise((resolve, reject) => {
        server.connection({
            host: 'localhost',
            port: 3000,
        })
        resolve(schema)
    })
}

const registerGQLRoutes = (server: Server) => (schema: GraphQLSchema) => {
    return server.register([
        {
            register: graphqlHapi,
            options: {
                path: '/graphql',
                graphqlOptions: { schema },
                route: {
                    cors: true,
                },
            },
        }, {
            register: graphiqlHapi,
            options: {
                path: '/',
                graphiqlOptions: {
                    endpointURL: '/graphql',
                },
            },
        },
    ])
}

const startServer = (server: Server) => () => {
    server.start((err) => {
        if (err) {
            throw err
        }
        console.log(`Server running at: ${server.info ? server.info.uri : 'UNKOWN'}`)
    })
}

const hapi = new Server()

Promise.all([getCatalogModule])
    .then(executableSchemaFromModules)
    .then(serverConnect(hapi))
    .then(registerGQLRoutes(hapi))
    .then(startServer(hapi))
