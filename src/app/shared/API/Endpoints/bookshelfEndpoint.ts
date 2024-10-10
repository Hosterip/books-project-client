const defaultEndpoint = "bookshelves/"

export const bookshelfEndpoints = {
    getBookshelves: (userId: string) => defaultEndpoint + userId,
    getBooks: (bookshelfId: string) => defaultEndpoint + `books/${bookshelfId}`,
    createBookshelf: (name: string) => defaultEndpoint + `createBookshelf/${name}`,
    addBook: defaultEndpoint + 'addBook',
    addBookToDefaultBookshelf: defaultEndpoint + 'addBookToDefaultBookshelf',
    removeBook: defaultEndpoint + 'removeBook',
    removeBookToDefaultBookshelf: defaultEndpoint + 'removeBookFromDefaultBookshelf',
}
