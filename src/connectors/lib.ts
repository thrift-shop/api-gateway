export const getTracingHeaders = (context: any) => {
    const incomingHeaders = [
        'x-request-id',
        'x-b3-traceid',
        'x-b3-spanid',
        'x-b3-parentspanid',
        'x-b3-sampled',
        'x-b3-flags',
        'x-ot-span-context',
    ]
    const headers: any = {}
    incomingHeaders.forEach((value) => {
        if (context.headers[value]) {
            headers[value] = context.headers[value]
        }
    })
    return headers
}
