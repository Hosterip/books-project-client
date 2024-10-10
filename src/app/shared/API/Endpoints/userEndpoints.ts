const defaultEndpoint = "auth/"

export const userEndpoints = {
    getCurrentUser: defaultEndpoint,
    getMany: defaultEndpoint + 'many',
    getSingle: (userId:string)  =>defaultEndpoint + `single/${userId}`,
    delete: defaultEndpoint,
    updateName: defaultEndpoint + 'name',
    updateEmail: defaultEndpoint + 'email',
    insertAvatar: defaultEndpoint + 'avatar',
}
