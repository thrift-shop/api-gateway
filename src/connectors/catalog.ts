import {
    createClient,
    fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import * as request from 'request'

import { CatalogService, Item } from '../codegen/catalog'

export { Item } from '../codegen/catalog'

const requestClient: RequestInstance = request.defaults({
    timeout: 1000,
})
const connection: HttpConnection<CatalogService.Client> = fromRequest(requestClient, {
    hostName: 'localhost',
    port: 3010,
    path: '/',
})
const thriftClient: CatalogService.Client = createClient(CatalogService.Client, connection)

export const allItems = () => thriftClient.getAll()
