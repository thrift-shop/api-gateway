import { IGraphQLModule, loadDocument } from '@creditkarma/graphql-loader'

import { resolvers } from './resolvers'

export const getCatalogModule = async (): Promise<IGraphQLModule> => {
    const document = await loadDocument('./graphql/catalog/*.graphql')
    return { document, resolvers }
}
