import {
    createClient,
    // fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import { config } from '@creditkarma/dynamic-config'

import * as request from 'request'

import { InventoryService, ItemStatus } from '../codegen/inventory'

const getClient = async () => {
    const envAddr = process.env.INVENTORYADDR
    const clientAddr = {
        hostName: await config().getWithDefault<string>('inventory.hostName', '0.0.0.0'),
        port: await config().getWithDefault<number>('inventory.port', 3020),
        requestOptions: await config().get<object>('inventory.requestOptions'),
        path: '/',
    }

    return createClient(InventoryService.Client, clientAddr)
}

export default async () => {
    const thriftClient = await getClient()
    return {
        getInventory: (itemId: string) => thriftClient.get(itemId),
        reduceInventory: (itemId: string, qty: number) => thriftClient.reduce(itemId, qty),
    }
}
