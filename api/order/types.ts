export interface IOrderProduct{
    product_id: string
    quantity: number
    sub_total: number
}


export interface IOrder{
    _id: string | undefined
    products: IOrderProduct[]
    total_price: number
}