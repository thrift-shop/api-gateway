import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import { getInventory } from '../connectors/inventory'

const resolvers = {
    RootQuery: {
        getInventory,
    },
}

export const getInventoryModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/inventory/*.graphql')
    return { document, resolvers }
}
