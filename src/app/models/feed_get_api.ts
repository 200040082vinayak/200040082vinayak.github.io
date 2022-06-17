export default interface User {
    username: string,
    profile_pic: string
}


export default interface Feed_get_api{
    file: string,
    user: User,
    date_posted: Date,
    description: string,
}