import { config } from '@creditkarma/dynamic-config'
import { GraphQLSchema } from 'graphql'

import { graphiqlHapi, graphqlHapi, IRegister } from 'apollo-server-hapi'
import { Request } from 'hapi'

export const good = async () => ({
    register: require('good'),
    options: {
        ops: await config().get('goodOps'),
        reporters: {
            myConsoleReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: await config().get('consoleReporter.args'),
            }, {
                module: 'good-console',
            }, 'stdout'],
        },
    },
})

export type GraphQLOptions = (request: Request) => {}
export const graphql = (graphqlOptions: GraphQLOptions) => ({
    register: graphqlHapi,
    options: {
        path: '/graphql',
        graphqlOptions,
        route: {
            cors: true,
        },
    },
})

export const graphiql = {
    register: graphiqlHapi,
    options: {
        path: '/',
        graphiqlOptions: {
            endpointURL: '/graphql',
        },
    },
}
