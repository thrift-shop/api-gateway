import { config } from '@creditkarma/dynamic-config'
import { GraphQLSchema } from 'graphql'

import { graphiqlHapi, graphqlHapi, IRegister } from 'apollo-server-hapi'

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

export const graphql = (schema: GraphQLSchema) => ({
    register: graphqlHapi,
    options: {
        path: '/graphql',
        graphqlOptions: { schema },
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
