import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    
    // Angular 1 - Aula 02 - Declarations = Todos os componentes que se enxergam internamente
    // Exports = Quem importa o module, só terá acesso ao que é exportado aqui
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule //Angular 1 - Aula 04. Boa prática importar o CommonModule, pois ele conte as diretivas do BrowserComponent
    ]
})
export class PhotosModule {}