import { loadSchema } from '@creditkarma/graphql-loader'
import { graphiqlHapi, graphqlHapi } from 'apollo-server-hapi'
import { Server } from 'hapi'

import { makeExecutableSchema } from 'graphql-tools'

import { resolvers } from './resolvers/catalog'

const HOST = 'localhost'
const PORT = 3000

const server = new Server()

server.connection({
    host: HOST,
    port: PORT,
})

loadSchema('./graphql/*.graphql')
    .then((typeDefs) => {
        const schema = makeExecutableSchema({ resolvers, typeDefs });

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
    }).then((err) => {
        return server.start((startErr) => {
            if (startErr) {
                throw startErr
            }
            console.log(`Server running at: ${server.info ? server.info.uri : HOST}`)
        })
    })
