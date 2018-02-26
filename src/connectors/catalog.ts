import {
    createClient,
    // fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import * as request from 'request'

import { CatalogService, Item } from '../codegen/catalog'

export { Item } from '../codegen/catalog'

const envAddr = process.env.CATALOGADDR
const clientAddr = {
    hostName: envAddr ? envAddr.split(':')[0] : '0.0.0.0',
    port: envAddr ? Number.parseInt(envAddr.split(':')[1]) : 3010,
    path: '/',
}

const requestClient: RequestInstance = request.defaults({
    timeout: 1000,
})
// const connection: HttpConnection<CatalogService.Client> = fromRequest(requestClient, clientAddr)
const thriftClient: CatalogService.Client = createClient(CatalogService.Client, clientAddr)

export const allItems = () => thriftClient.getAll()
