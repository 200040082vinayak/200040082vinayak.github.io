export default interface User {
    username: string
}


export default interface Feed_get_api{
    file: string,
    user: User,
    date_posted: Date,
    description: string,
}