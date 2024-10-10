const defaultEndpoint = "books/"

export const bookEndpoints = {
    getMany: defaultEndpoint + 'many',
    getSingle: (bookId:string) => defaultEndpoint + `single/${bookId}`,
    postBook: defaultEndpoint,
    update: defaultEndpoint,
    delete: (bookId:string) => defaultEndpoint + `delete/${bookId}`,
}
