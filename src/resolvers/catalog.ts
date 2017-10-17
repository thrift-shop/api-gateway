import {
    createClient,
    fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import * as request from 'request'

import { CatalogService, Item } from '../codegen/catalog'

const requestClient: RequestInstance = request.defaults({
    timeout: 1000,
})
const connection: HttpConnection<CatalogService.Client> = fromRequest(requestClient, {
    hostName: 'localhost',
    port: 3010,
    path: '/',
    protocol: 'binary',
    transport: 'buffered',
})
const thriftClient: CatalogService.Client = createClient(CatalogService.Client, connection)

export const resolvers = {
    RootQuery: {
        allItems: (): Promise<Item[]> => thriftClient.getAll(),
    },
}
