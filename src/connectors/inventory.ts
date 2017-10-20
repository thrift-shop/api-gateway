import {
    createClient,
    fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import * as request from 'request'

import { InventoryService, ItemStatus } from '../codegen/inventory'

const envAddr = process.env.INVENTORYADDR
const clientAddr = {
    hostName: envAddr ? envAddr.split(':')[0] : '0.0.0.0',
    port: envAddr ? Number.parseInt(envAddr.split(':')[1]) : 3020,
    path: '/',
}

const requestClient: RequestInstance = request.defaults({
    timeout: 1000,
})
const connection: HttpConnection<InventoryService.Client> = fromRequest(requestClient, clientAddr)
const thriftClient: InventoryService.Client = createClient(InventoryService.Client, connection)

export const getInventory = (itemId: string) => thriftClient.get(itemId)
export const reduceInventory = (itemId: string, qty: number) => thriftClient.reduce(itemId, qty)
