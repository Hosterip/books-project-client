const defaultEndpoint = "genres/"

export const genreEndpoints = {
    getGenres: defaultEndpoint,
    postGenre: (name: string) => defaultEndpoint + name,
}
