import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
     
    // Angular 1 -  Aula 02 Inbound Properties
    @Input() description = '';
    @Input() url = '';
}