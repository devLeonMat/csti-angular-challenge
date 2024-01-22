import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SelectModel} from "../../../data/schemas/select.model";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    documentType: SelectModel[] = [
        {
            description: 'DNI',
            value: '1'
        } ,       {
            description: 'Carné de Extranjeria',
            value: '2'
        },   {
            description: 'Pasaporte',
            value: '3'
        },
    ];

    loginForm: FormGroup;
    hide = true;
    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            documentType: ['', Validators.required],
            documentNumber: [null, Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log('Formulario enviado', this.loginForm.value);
    }

    ngOnInit() {
    }

    login() {
        console.log('login process');
    }
}
