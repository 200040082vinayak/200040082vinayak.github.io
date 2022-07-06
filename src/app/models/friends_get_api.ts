export default interface Friends{
    id: string,
    username: string,
    profile_pic: string
}


export default interface Friends_get_api{
    // id: BigInteger,
    // username: string,
    friends: [Friends]
}