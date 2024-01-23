import {Inject, Injectable} from "@angular/core";
import {MenuModel} from "../schemas/menu.model";
import {BehaviorSubject, Observable} from "rxjs";
import {CategoryModel, ProductModel} from "../schemas/product.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class StoreService{

    private menuSubject = new BehaviorSubject<MenuModel | null>(null);
    public menu$ = this.menuSubject.asObservable();
    private productSubject = new BehaviorSubject<ProductModel | null>(null);
    public product$ = this.productSubject.asObservable();

    apiStore = environment.api_store;
    constructor(private http: HttpClient) {
    }

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

    getAllProducts(limit = 10): Observable<ProductModel[]> {
        console.log(this.apiStore+'products?limit='+limit);
        return this.http.get<any>(`${this.apiStore}products?limit=${limit}`);
    }
}