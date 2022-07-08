
export interface Products_cart{

    id: string
    user: string
    name: string
    file: string
    price: string
}



export default interface Cart_product_api{

    product: Products_cart
    quantity: string
    cart: string
    id: string
}