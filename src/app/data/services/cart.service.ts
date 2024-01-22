import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable({providedIn: 'root'})
export class CartService {

    private counterSubject = new BehaviorSubject<number>(0);
    public counter$ = this.counterSubject.asObservable();


    constructor() {

    }

    addCounter(){
        this.counterSubject.next(this.counterSubject.value+1)
    }

    restartCounter(){
        this.counterSubject.next(0)
    }

}