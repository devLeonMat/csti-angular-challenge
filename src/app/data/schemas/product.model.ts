
export interface ProductModel{
    keyItem: string
    keyItemCanje: string
    idCatalogoProducto: number
    precioCatalogo: number
    titulo: string
    nombre: string
    imagenOportunidad: string
    precioPuntos: number
    formatPrecioCatalogo: string
    formatPrecioPuntos: string
    formatPrecioCompra: string
    esOferta: boolean
    verPrecioRegular: boolean
    parTipoOferta: number
    precioPuntosRegular: string
    colorImagen: string
    porcentajeDescuento: string
    verCantidadStock?: number
    verProductoAgotado: boolean
    verPrecioProducto: boolean
    mensajeStockProducto: string
    stockDisponible: number
    descripcionMarca: string
    idProducto: number
    codigoNetsuite: string
    destacado: number
}
export interface CategoryModel{
    idCategoriaArbol: number
    nombre: string
    codigo: string
    urlImagenTop: string
    urlImagenCategoria: string
    parTipoCategoria: number
    listaProductos: ProductModel[]
    cantidadTotalProductos: number
}