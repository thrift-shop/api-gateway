import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import {default as inventoryConnector} from '../connectors/inventory'

interface IGetInventoryArgs {
    itemId: string
}
interface IReduceInventoryArgs {
    input: {
        itemId: string,
        qty: number,
    },
}
export const getInventoryModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/inventory/*.graphql')
    const connector = await inventoryConnector()

    const getInventory = (obj: {}, args: IGetInventoryArgs) =>
        connector.getInventory(args.itemId)

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

    return { document, resolvers }
}
