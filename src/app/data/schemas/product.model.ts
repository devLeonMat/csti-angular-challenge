
export interface ProductModel{
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}
export interface CategoryModel{
    categoryName: string
    products: ProductModel[]
    productsQuantity: number
}