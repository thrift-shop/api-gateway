import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import { default as getCatalog, Item } from '../connectors/catalog'
import { default as getInventory } from '../connectors/inventory'

export const getCatalogModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/catalog/*.graphql')
    const catalog = await getCatalog()
    const inventory = await getInventory()

    const resolvers = {
        RootQuery: {
            allItems: catalog.allItems,
        },
        Item: {
            status: (item: Item) => inventory.getInventory(item.itemId),
        },
    }

    return { document, resolvers }
}
