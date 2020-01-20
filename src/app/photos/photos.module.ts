import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    
    // Angular 1 - Aula 02 - Declarations = Todos os componentes que se enxergam internamente
    // Exports = Quem importa o module, só terá acesso ao que é exportado aqui
    declarations: [ PhotoComponent ],
    exports: [
        PhotoComponent
    ],
    imports: [HttpClientModule]
})
export class PhotosModule {}