import {
    createClient,
    fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import * as request from 'request'

import { InventoryService, ItemStatus } from '../codegen/inventory'

const requestClient: RequestInstance = request.defaults({
    timeout: 1000,
})
const connection: HttpConnection<InventoryService.Client> = fromRequest(requestClient, {
    hostName: 'localhost',
    port: 3020,
    path: '/',
})
const thriftClient: InventoryService.Client = createClient(InventoryService.Client, connection)

export const getInventory = (itemId: string) => thriftClient.get(itemId)
