import {
    createClient,
} from '@creditkarma/thrift-client'

import * as childProcess from 'child_process'
import { expect } from 'code'
import * as Lab from 'lab'

import { Request } from 'hapi';

import { CoreOptions, post } from 'request'

import { introspectionQuery } from 'graphql'

export const lab = Lab.script()

const describe = lab.describe
const it = lab.it
const before = lab.before
const after = lab.after

describe('GraphQL Server Hapi', () => {
    let server: any

    before((done) => {
        server = childProcess.fork('./dist/server.js')
        setTimeout(done, 1000)
    })

    it('should return graphql schema', (done) => {
        const options = {
            uri: `http://0.0.0.0:${parseInt(process.env.PORT || '3000', 10)}/graphql`,
            json: true,
            body: {query: introspectionQuery},
        }
        post(options, (err, resp, body) => {
            expect(resp).to.exist()
            expect(body.data.__schema).to.exist()
            done()
        })
    })

    after((done: any) => {
        server.kill('SIGINT')
        setTimeout(done, 1000)
    })
})
