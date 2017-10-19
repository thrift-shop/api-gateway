import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import * as connector from '../connectors/inventory'

interface IGetInventoryArgs {
    itemId: string
}
const getInventory = (obj: {}, args: IGetInventoryArgs) =>
    connector.getInventory(args.itemId)

interface IReduceInventoryArgs {
    input: {
        itemId: string,
        qty: number,
    },
}
const reduceInventory = (obj: {}, args: IReduceInventoryArgs) =>
    connector.reduceInventory(args.input.itemId, args.input.qty)

const resolvers = {
    RootQuery: {
        getInventory,
    },
    RootMutation: {
        reduceInventory,
    },
}

export const getInventoryModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/inventory/*.graphql')
    return { document, resolvers }
}
