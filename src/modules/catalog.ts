import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import { allItems, Item } from '../connectors/catalog'
import { getInventory } from '../connectors/inventory'

const resolvers = {
    RootQuery: {
        allItems,
    },
    Item: {
        status: (item: Item) => getInventory(item.itemId),
    },
}

export const getCatalogModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/catalog/*.graphql')
    return { document, resolvers }
}
