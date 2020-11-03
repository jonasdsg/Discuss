import { NgModule } from '@angular/core';
import { NovoComentarioComponent } from './novo-comentario/novo-comentario.component';
import { ListarComentariosComponent } from './lista-comentarios/listar-comentarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        NovoComentarioComponent,
        ListarComentariosComponent,
    ],
    exports: [
        NovoComentarioComponent,
        ListarComentariosComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
    ]
})

export class ComentariosModule{}