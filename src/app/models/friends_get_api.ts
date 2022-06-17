export default interface Friends{
    id: BigInteger,
    username: string,
    profile_pic: string
}


export default interface Friends_get_api{
    // id: BigInteger,
    // username: string,
    friends: [Friends]
}