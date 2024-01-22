import {Inject, Injectable} from "@angular/core";
import {MenuModel} from "../schemas/menu.model";
import {BehaviorSubject} from "rxjs";
import {CategoryModel, ProductModel} from "../schemas/product.model";


@Injectable({providedIn: 'root'})
export class StoreService{

    private menuSubject = new BehaviorSubject<MenuModel | null>(null);
    public menu$ = this.menuSubject.asObservable();
    private productSubject = new BehaviorSubject<ProductModel | null>(null);
    public product$ = this.productSubject.asObservable();

    getMenuOptions(): Promise<MenuModel[]> {
        const jsonData = [
            {
                value: '1',
                description: 'Vales y gifcards',
            },   {
                value: '2',
                description: 'Productos',
            },   {
                value: '3',
                description: 'Viajes',
            },   {
                value: '4',
                description: 'Canje en tiendas',
            },
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(jsonData);
            }, 100);
        });
    }

    setMenuOption(menu: MenuModel){
        this.menuSubject.next(menu)
    }

    getProducts(): Promise<CategoryModel[]> {


        const jsonData = [
            {
                "idCategoriaArbol": 5108,
                "nombre": "Alisadoras ",
                "codigo": "alisadoras",
                "urlImagenTop": "",
                "urlImagenCategoria": "239648.png",
                "parTipoCategoria": 1,
                "listaProductos": [
                    {
                        "keyItem": "plancha-para-cabello-xwide-dig-3d-titanio-220v-60364311285",
                        "keyItemCanje": "plancha-para-cabello-xwide-dig-3d-titanio-220v-60362506614",
                        "idCatalogoProducto": 221766,
                        "precioCatalogo": 234.6,
                        "titulo": "Plancha para cabello xwide dig 3d titanio 220v",
                        "nombre": "Plancha para cabello xwide dig 3d titanio 220v",
                        "imagenOportunidad": "/ficha-tecnica/385827-ficha-tecnica.png",
                        "precioPuntos": 7820,
                        "formatPrecioCatalogo": "234.60",
                        "formatPrecioPuntos": "7,820",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "9,967",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "22",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Gama",
                        "idProducto": 15477,
                        "codigoNetsuite": "385827",
                        "destacado": 28
                    },
                    {
                        "keyItem": "alisadora-210c-hp8321-philips-488499374",
                        "keyItemCanje": "alisadora-210c-hp8321-philips-48842494855",
                        "idCatalogoProducto": 221849,
                        "precioCatalogo": 93.0,
                        "titulo": "Alisadora 210c - hp8321 philips",
                        "nombre": "Alisadora 210c - hp8321 philips",
                        "imagenOportunidad": "/ficha-tecnica/4078-ficha-tecnica.png",
                        "precioPuntos": 3100,
                        "formatPrecioCatalogo": "93.00",
                        "formatPrecioPuntos": "3,100",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "4,967",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "38",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Philips",
                        "idProducto": 16505,
                        "codigoNetsuite": "4078",
                        "destacado": 27
                    },
                    {
                        "keyItem": "alisadora-de-cabello-bhs376_00-philips-48843192827",
                        "keyItemCanje": "alisadora-de-cabello-bhs376_00-philips-48842491742",
                        "idCatalogoProducto": 221566,
                        "precioCatalogo": 121.5,
                        "titulo": "Alisadora de cabello bhs376_00 philips",
                        "nombre": "Alisadora de cabello bhs376_00 philips",
                        "imagenOportunidad": "/ficha-tecnica/285301-ficha-tecnica.png",
                        "precioPuntos": 4050,
                        "formatPrecioCatalogo": "121.50",
                        "formatPrecioPuntos": "4,050",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "6,633",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "39",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Philips",
                        "idProducto": 16523,
                        "codigoNetsuite": "285301",
                        "destacado": 27
                    },
                    {
                        "keyItem": "plancha-para-cabello-essentialcare-philips-07881305491",
                        "keyItemCanje": "plancha-para-cabello-essentialcare-philips-07882445212",
                        "idCatalogoProducto": 221432,
                        "precioCatalogo": 109.2,
                        "titulo": "Plancha para cabello essentialcare philips",
                        "nombre": "Plancha para cabello essentialcare philips",
                        "imagenOportunidad": "/ficha-tecnica/117821-ficha-tecnica.png",
                        "precioPuntos": 3640,
                        "formatPrecioCatalogo": "109.20",
                        "formatPrecioPuntos": "3,640",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "4,300",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "15",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Philips",
                        "idProducto": 9471,
                        "codigoNetsuite": "117821",
                        "destacado": 26
                    }
                ],
                "cantidadTotalProductos": 6
            },
            {
                "idCategoriaArbol": 5106,
                "nombre": "Cuidado Corporal",
                "codigo": "cuidado-corporal",
                "urlImagenTop": "",
                "urlImagenCategoria": "210955-ficha-tecnica.png",
                "parTipoCategoria": 1,
                "listaProductos": [
                    {
                        "keyItem": "masajeador-portatil-first-health-15084995749",
                        "keyItemCanje": "masajeador-portatil-first-health-15082459765",
                        "idCatalogoProducto": 222035,
                        "precioCatalogo": 75.3,
                        "titulo": "Masajeador portátil first health",
                        "nombre": "Masajeador portátil first health",
                        "imagenOportunidad": "/ficha-tecnica/452579-ficha-tecnica.png",
                        "precioPuntos": 2510,
                        "formatPrecioCatalogo": "75.30",
                        "formatPrecioPuntos": "2,510",
                        "formatPrecioCompra": "0",
                        "esOferta": false,
                        "verPrecioRegular": false,
                        "parTipoOferta": 0,
                        "precioPuntosRegular": "2,330",
                        "colorImagen": "",
                        "porcentajeDescuento": "",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "First Health",
                        "idProducto": 17568,
                        "codigoNetsuite": "452579",
                        "destacado": 23
                    }
                ],
                "cantidadTotalProductos": 1
            },
            {
                "idCategoriaArbol": 4983,
                "nombre": "Cuidado del cabello",
                "codigo": "cuidado-del-cabello",
                "urlImagenTop": "",
                "urlImagenCategoria": "192096-ficha-tecnica.png",
                "parTipoCategoria": 1,
                "listaProductos": [
                    {
                        "keyItem": "rizador-de-cabello-profesional-premium-hubsch-negro-03725451468",
                        "keyItemCanje": "rizador-de-cabello-profesional-premium-hubsch-negro-03722450338",
                        "idCatalogoProducto": 222314,
                        "precioCatalogo": 120.6,
                        "titulo": "Rizador de cabello profesional premium Hubsch negro",
                        "nombre": "Rizador de cabello profesional premium Hubsch negro",
                        "imagenOportunidad": "/ficha-tecnica/495144-ficha-tecnica.png",
                        "precioPuntos": 4020,
                        "formatPrecioCatalogo": "120.60",
                        "formatPrecioPuntos": "4,020",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "5,633",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "29",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 2,
                        "descripcionMarca": "Hubsch",
                        "idProducto": 17952,
                        "codigoNetsuite": "495144",
                        "destacado": 26
                    },
                    {
                        "keyItem": "maletin-x-5-cepillos-evolution-plus-61644216102",
                        "keyItemCanje": "maletin-x-5-cepillos-evolution-plus-61642507714",
                        "idCatalogoProducto": 221738,
                        "precioCatalogo": 219.29999999999998,
                        "titulo": "Maletín x 5 cepillos evolution plus",
                        "nombre": "Maletín x 5 cepillos evolution plus",
                        "imagenOportunidad": "/ficha-tecnica/377046-ficha-tecnica.png",
                        "precioPuntos": 7310,
                        "formatPrecioCatalogo": "219.30",
                        "formatPrecioPuntos": "7,310",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "9,300",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "21",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Termix",
                        "idProducto": 15368,
                        "codigoNetsuite": "377046",
                        "destacado": 26
                    },
                    {
                        "keyItem": "cortador-de-cabello-hc5630_15-philips-45483873903",
                        "keyItemCanje": "cortador-de-cabello-hc5630_15-philips-45482489190",
                        "idCatalogoProducto": 221670,
                        "precioCatalogo": 204.29999999999998,
                        "titulo": "Cortador de cabello hc5630_15 philips",
                        "nombre": "Cortador de cabello hc5630_15 philips",
                        "imagenOportunidad": "/ficha-tecnica/347553-ficha-tecnica.png",
                        "precioPuntos": 6810,
                        "formatPrecioCatalogo": "204.30",
                        "formatPrecioPuntos": "6,810",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "11,633",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "41",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 2,
                        "descripcionMarca": "Philips",
                        "idProducto": 15614,
                        "codigoNetsuite": "347553",
                        "destacado": 26
                    },
                    {
                        "keyItem": "cepillo-de-cabello-6bar1040006-barbie-35885346561",
                        "keyItemCanje": "cepillo-de-cabello-6bar1040006-barbie-35882484229",
                        "idCatalogoProducto": 222179,
                        "precioCatalogo": 34.5,
                        "titulo": "Cepillo de cabello 6bar1040006 Barbie",
                        "nombre": "Cepillo de cabello 6bar1040006 Barbie",
                        "imagenOportunidad": "/ficha-tecnica/482391-ficha-tecnica.png",
                        "precioPuntos": 1150,
                        "formatPrecioCatalogo": "34.50",
                        "formatPrecioPuntos": "1,150",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "1,663",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "31",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 3,
                        "descripcionMarca": "Barbie",
                        "idProducto": 17768,
                        "codigoNetsuite": "482391",
                        "destacado": 25
                    },
                    {
                        "keyItem": "tijera-pulidora-6-5-henbor-61644216157",
                        "keyItemCanje": "tijera-pulidora-6-5-henbor-61642507747",
                        "idCatalogoProducto": 221741,
                        "precioCatalogo": 124.19999999999999,
                        "titulo": "Tijera pulidora 6.5\" henbor",
                        "nombre": "Tijera pulidora 6.5\" henbor",
                        "imagenOportunidad": "/ficha-tecnica/377051-ficha-tecnica.png",
                        "precioPuntos": 4140,
                        "formatPrecioCatalogo": "124.20",
                        "formatPrecioPuntos": "4,140",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "4,733",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "13",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Henbor",
                        "idProducto": 15374,
                        "codigoNetsuite": "377051",
                        "destacado": 25
                    },
                    {
                        "keyItem": "rizador-de-cabello-marca-gama-19083373084",
                        "keyItemCanje": "rizador-de-cabello-marca-gama-19082459424",
                        "idCatalogoProducto": 221604,
                        "precioCatalogo": 60.3,
                        "titulo": "Rizador de cabello marca gama",
                        "nombre": "Rizador de cabello marca gama",
                        "imagenOportunidad": "/ficha-tecnica/304664-ficha-tecnica.png",
                        "precioPuntos": 2010,
                        "formatPrecioCatalogo": "60.30",
                        "formatPrecioPuntos": "2,010",
                        "formatPrecioCompra": "0",
                        "esOferta": false,
                        "verPrecioRegular": false,
                        "parTipoOferta": 0,
                        "precioPuntosRegular": "1,967",
                        "colorImagen": "",
                        "porcentajeDescuento": "",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 2,
                        "descripcionMarca": "Gama",
                        "idProducto": 13427,
                        "codigoNetsuite": "304664",
                        "destacado": 25
                    },
                    {
                        "keyItem": "cortador-de-cabello-remington-02441106061",
                        "keyItemCanje": "cortador-de-cabello-remington-02442438920",
                        "idCatalogoProducto": 221404,
                        "precioCatalogo": 85.2,
                        "titulo": "Cortador de cabello Remington",
                        "nombre": "Cortador de cabello Remington",
                        "imagenOportunidad": "/ficha-tecnica/100235-ficha-tecnica.png",
                        "precioPuntos": 2840,
                        "formatPrecioCatalogo": "85.20",
                        "formatPrecioPuntos": "2,840",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "4,967",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "43",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 3,
                        "descripcionMarca": "Remington",
                        "idProducto": 18007,
                        "codigoNetsuite": "100235",
                        "destacado": 25
                    },
                    {
                        "keyItem": "rizador-de-cabello-chrome-curls-cepillo-remington-02441105929",
                        "keyItemCanje": "rizador-de-cabello-chrome-curls-cepillo-remington-02442438909",
                        "idCatalogoProducto": 221403,
                        "precioCatalogo": 64.2,
                        "titulo": "Rizador de cabello chrome curls + cepillo Remington",
                        "nombre": "Rizador de cabello chrome curls + cepillo Remington",
                        "imagenOportunidad": "/ficha-tecnica/100223-ficha-tecnica.png",
                        "precioPuntos": 2140,
                        "formatPrecioCatalogo": "64.20",
                        "formatPrecioPuntos": "2,140",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "3,300",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "35",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Remington",
                        "idProducto": 18006,
                        "codigoNetsuite": "100223",
                        "destacado": 25
                    },
                    {
                        "keyItem": "cepillo-de-cabello-6bar1040006-barbie-35885346561",
                        "keyItemCanje": "cepillo-de-cabello-6bar1040006-barbie-35882472129",
                        "idCatalogoProducto": 221079,
                        "precioCatalogo": 34.5,
                        "titulo": "Cepillo de cabello 6bar1040006 Barbie",
                        "nombre": "Cepillo de cabello 6bar1040006 Barbie",
                        "imagenOportunidad": "/ficha-tecnica/482391-ficha-tecnica.png",
                        "precioPuntos": 1150,
                        "formatPrecioCatalogo": "34.50",
                        "formatPrecioPuntos": "1,150",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "1,663",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "31",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 3,
                        "descripcionMarca": "Barbie",
                        "idProducto": 17768,
                        "codigoNetsuite": "482391",
                        "destacado": 25
                    },
                    {
                        "keyItem": "cortadora-de-cabello-hc3510-15-philips-12204259519",
                        "keyItemCanje": "cortadora-de-cabello-hc3510-15-philips-12202453726",
                        "idCatalogoProducto": 221774,
                        "precioCatalogo": 105.6,
                        "titulo": "Cortadora de cabello hc3510/15 philips",
                        "nombre": "Cortadora de cabello hc3510/15 philips",
                        "imagenOportunidad": "/ficha-tecnica/385937-ficha-tecnica.png",
                        "precioPuntos": 3520,
                        "formatPrecioCatalogo": "105.60",
                        "formatPrecioPuntos": "3,520",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "4,967",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "29",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Philips",
                        "idProducto": 15573,
                        "codigoNetsuite": "385937",
                        "destacado": 24
                    },
                    {
                        "keyItem": "cortador-de-cabello-clipper-sport-220v-60364311318",
                        "keyItemCanje": "cortador-de-cabello-clipper-sport-220v-60362506625",
                        "idCatalogoProducto": 221767,
                        "precioCatalogo": 92.7,
                        "titulo": "Cortador de cabello Clipper sport 220v",
                        "nombre": "Cortador de cabello Clipper sport 220v",
                        "imagenOportunidad": "/ficha-tecnica/385830-ficha-tecnica.png",
                        "precioPuntos": 3090,
                        "formatPrecioCatalogo": "92.70",
                        "formatPrecioPuntos": "3,090",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "3,633",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "15",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Ga.Ma",
                        "idProducto": 15467,
                        "codigoNetsuite": "385830",
                        "destacado": 22
                    },
                    {
                        "keyItem": "cortador-de-cabello-clipper-ga-ma-24-pcs-220v-19725534782",
                        "keyItemCanje": "cortador-de-cabello-clipper-ga-ma-24-pcs-220v-19722468917",
                        "idCatalogoProducto": 222403,
                        "precioCatalogo": 92.1,
                        "titulo": "Cortador de cabello Clipper Ga.Ma 24 pcs 220v",
                        "nombre": "Cortador de cabello Clipper Ga.Ma 24 pcs 220v",
                        "imagenOportunidad": "/ficha-tecnica/501118-ficha-tecnica.png",
                        "precioPuntos": 3070,
                        "formatPrecioCatalogo": "92.10",
                        "formatPrecioPuntos": "3,070",
                        "formatPrecioCompra": "0",
                        "esOferta": true,
                        "verPrecioRegular": true,
                        "parTipoOferta": 1,
                        "precioPuntosRegular": "4,300",
                        "colorImagen": "#e0025b",
                        "porcentajeDescuento": "29",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 2,
                        "descripcionMarca": "Ga.Ma",
                        "idProducto": 18014,
                        "codigoNetsuite": "501118",
                        "destacado": 20
                    }
                ],
                "cantidadTotalProductos": 12
            },
            {
                "idCategoriaArbol": 5107,
                "nombre": "Cuidado Facial",
                "codigo": "cuidado-facial",
                "urlImagenTop": "155647-ficha-tecnica.png",
                "urlImagenCategoria": "155647-ficha-tecnica.png",
                "parTipoCategoria": 1,
                "listaProductos": [
                    {
                        "keyItem": "umbrella-50-crema-29164684350",
                        "keyItemCanje": "umbrella-50-crema-29162473746",
                        "idCatalogoProducto": 221898,
                        "precioCatalogo": 89.1,
                        "titulo": "Umbrella 50+ crema",
                        "nombre": "Umbrella 50+ crema",
                        "imagenOportunidad": "/ficha-tecnica/422862-ficha-tecnica.png",
                        "precioPuntos": 2970,
                        "formatPrecioCatalogo": "89.10",
                        "formatPrecioPuntos": "2,970",
                        "formatPrecioCompra": "0",
                        "esOferta": false,
                        "verPrecioRegular": false,
                        "parTipoOferta": 0,
                        "precioPuntosRegular": "3,067",
                        "colorImagen": "",
                        "porcentajeDescuento": "",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 2,
                        "descripcionMarca": "Umbrella",
                        "idProducto": 16238,
                        "codigoNetsuite": "422862",
                        "destacado": 27
                    },
                    {
                        "keyItem": "retinol-eye-tr-7ml-hydr8-b5-30ml-16203918486",
                        "keyItemCanje": "retinol-eye-tr-7ml-hydr8-b5-30ml-16202457037",
                        "idCatalogoProducto": 221675,
                        "precioCatalogo": 336.0,
                        "titulo": "Retinol eye tr-7ml + hydr8 b5 30ml",
                        "nombre": "Retinol eye tr-7ml + hydr8 b5 30ml",
                        "imagenOportunidad": "/ficha-tecnica/354534-ficha-tecnica.png",
                        "precioPuntos": 11200,
                        "formatPrecioCatalogo": "336.00",
                        "formatPrecioPuntos": "11,200",
                        "formatPrecioCompra": "0",
                        "esOferta": false,
                        "verPrecioRegular": false,
                        "parTipoOferta": 0,
                        "precioPuntosRegular": "10,701",
                        "colorImagen": "",
                        "porcentajeDescuento": "",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 1,
                        "descripcionMarca": "Medik8",
                        "idProducto": 14766,
                        "codigoNetsuite": "354534",
                        "destacado": 26
                    },
                    {
                        "keyItem": "bioderma-sensibio-h2o-agua-micelar-desmaquillante-calmante-500ml-87083294522",
                        "keyItemCanje": "bioderma-sensibio-h2o-agua-micelar-desmaquillante-calmante-500ml-87082533905",
                        "idCatalogoProducto": 221575,
                        "precioCatalogo": 115.19999999999999,
                        "titulo": "Bioderma sensibio h2o agua micelar desmaquillante calmante 500ml",
                        "nombre": "Bioderma sensibio h2o agua micelar desmaquillante calmante 500ml",
                        "imagenOportunidad": "/ficha-tecnica/290722-ficha-tecnica.png",
                        "precioPuntos": 3840,
                        "formatPrecioCatalogo": "115.20",
                        "formatPrecioPuntos": "3,840",
                        "formatPrecioCompra": "0",
                        "esOferta": false,
                        "verPrecioRegular": false,
                        "parTipoOferta": 0,
                        "precioPuntosRegular": "3,850",
                        "colorImagen": "",
                        "porcentajeDescuento": "",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 2,
                        "descripcionMarca": "Bioderma",
                        "idProducto": 12931,
                        "codigoNetsuite": "290722",
                        "destacado": 26
                    },
                    {
                        "keyItem": "bioderma-sebium-gel-gommant-gel-exfoliante-purificador-100ml-87083294544",
                        "keyItemCanje": "bioderma-sebium-gel-gommant-gel-exfoliante-purificador-100ml-87082533916",
                        "idCatalogoProducto": 221576,
                        "precioCatalogo": 90.6,
                        "titulo": "Bioderma sébium gel gommant gel exfoliante purificador 100ml",
                        "nombre": "Bioderma sébium gel gommant gel exfoliante purificador 100ml",
                        "imagenOportunidad": "/ficha-tecnica/290724-ficha-tecnica.png",
                        "precioPuntos": 3020,
                        "formatPrecioCatalogo": "90.60",
                        "formatPrecioPuntos": "3,020",
                        "formatPrecioCompra": "0",
                        "esOferta": false,
                        "verPrecioRegular": false,
                        "parTipoOferta": 0,
                        "precioPuntosRegular": "2,500",
                        "colorImagen": "",
                        "porcentajeDescuento": "",
                        "verCantidadStock": 0,
                        "verProductoAgotado": false,
                        "verPrecioProducto": false,
                        "mensajeStockProducto": "Mensaje stock",
                        "stockDisponible": 3,
                        "descripcionMarca": "Bioderma",
                        "idProducto": 12937,
                        "codigoNetsuite": "290724",
                        "destacado": 24
                    }
                ],
                "cantidadTotalProductos": 4
            },
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(jsonData);
            }, 100);
        });
    }
}