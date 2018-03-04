import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import { default as getCatalog, Item } from '../connectors/catalog'
import { default as getInventory } from '../connectors/inventory'

export const getCatalogModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/catalog/*.graphql')
    const catalog = await getCatalog()
    const inventory = await getInventory()

    const resolvers = {
        RootQuery: {
            allItems: (obj: any, args: any, context: any) => catalog.allItems(context),
        },
        Item: {
            status: (item: Item, args: any, context: any) => inventory.getInventory(item.itemId, context),
        },
    }

    return { document, resolvers }
}
