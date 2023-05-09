import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ModalPopUpComponent
  ],
  template: `
    <app-modal-pop-up></app-modal-pop-up>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
