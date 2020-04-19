import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    
    // Angular 1 - Aula 02 - Declarations = Todos os componentes que se enxergam internamente
    // Exports = Quem importa o module, só terá acesso ao que é exportado aqui
    // Angular 1 -  Aula 07 -  Transformou tudo em SubModules
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {}