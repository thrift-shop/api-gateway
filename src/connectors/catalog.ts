import {
    createClient,
    // fromRequest,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import { config } from '@creditkarma/dynamic-config'

import * as request from 'request'

import { CatalogService, Item } from '../codegen/catalog'

export { Item } from '../codegen/catalog'

export const getClient = async () => {
    const envAddr = process.env.CATALOGADDR
    const clientAddr = {
        hostName: await config().getWithDefault<string>('catalog.hostName', '0.0.0.0'),
        port: await config().getWithDefault<number>('catalog.port', 3010),
        requestOptions: await config().get<object>('catalog.requestOptions'),
        path: '/',
    }

    return createClient(CatalogService.Client, clientAddr)
}

export default async () => {
    const thriftClient = await getClient()
    return {
        allItems: () => thriftClient.getAll(),
    }
}
