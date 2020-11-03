import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'novo-comentario',
    templateUrl: './novo-comentario.component.html',
})
export class NovoComentarioComponent implements OnInit{
    formNovoComentario:FormGroup;
    constructor(private formBuilder:FormBuilder){}
    
    ngOnInit(): void {
        
        this.formNovoComentario = this.formBuilder.group({
            nome: [''],
            mensagem: [''],
        });
    }
}