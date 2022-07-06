

export interface User {

    id: string,
    username: string,
    profile_pic: string
}

export interface Subcategory {

    name: string,
    category: Category

}

export interface Category {

    name: string,
    

}

export default interface market {

    name: string,
    user: User,
    subcategory: Subcategory,
    description: string,
    file: string,
    price: string,
    long_description: string,
    id: string,

}
