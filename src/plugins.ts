import { config } from '@creditkarma/dynamic-config'
import { GraphQLSchema } from 'graphql'

import { graphqlHapi, IRegister } from 'apollo-server-hapi'
import { PluginRegistrationObject } from 'hapi'

import { ConsoleRecorder, ExplicitContext, Tracer  } from 'zipkin'
import { ZipkinPluginOptions } from 'zipkin-instrumentation-hapi'

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
    register: require('apollo-server-hapi').graphiqlHapi,
    options: {
        path: '/',
        graphiqlOptions: {
            endpointURL: '/graphql',
        },
    },
}

export const zipkin = {
    register: require('zipkin-instrumentation-hapi').hapiMiddleware,
    options: {
        tracer: new Tracer({
            ctxImpl: new ExplicitContext(),
            recorder: new ConsoleRecorder(),
            localServiceName: 'api-gateway',
        }),
    },
}
