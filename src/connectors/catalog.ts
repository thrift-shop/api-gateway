import {
    createClient,
    HttpConnection,
    RequestInstance,
} from '@creditkarma/thrift-client'

import { config } from '@creditkarma/dynamic-config'

import * as request from 'request'

import { getTracingHeaders } from './lib'

import { CatalogService, Item } from '../codegen/catalog'
export { Item } from '../codegen/catalog'

export const getClient = async () => {
    const envAddr = parseInt(process.env.CATALOGADDR || '3010', 2)
    const clientAddr = {
        hostName: await config().getWithDefault<string>('catalog.hostName', '0.0.0.0'),
        port: await config().getWithDefault<number>('catalog.port', envAddr),
        requestOptions: await config().get<object>('catalog.requestOptions'),
        path: '/',
    }

    return createClient(CatalogService.Client, clientAddr)
}

export default async () => {
    const thriftClient = await getClient()
    return {
        allItems: (context: any) => {
            const headers = getTracingHeaders(context)
            return thriftClient.getAll({headers})
        },
    }
}
