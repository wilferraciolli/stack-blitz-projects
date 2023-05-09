import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-pop-up',
  standalone: true,
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css'],
  imports: [CommonModule],
})
export class ModalPopUpComponent implements OnInit {
  public isPopupVisible: boolean = false;
  public popupTop: number = 0;
  public popupLeft: number = 0;

  constructor() {}

  ngOnInit() {}

  // showPopup() {
  //   this.isPopupVisible = !this.isPopupVisible;
  // }

  showPopup(event: MouseEvent): void {
    const button = document.querySelector('button') as HTMLElement;
    const buttonRect = button.getBoundingClientRect();
    const container = document.querySelector('.popup-container') as HTMLElement;
    const containerRect = container.getBoundingClientRect();

    const popupTop = buttonRect.bottom + 10;
    const popupLeft =
      buttonRect.left + buttonRect.width / 2 - containerRect.width / 2;

    container.style.top = popupTop + 'px';
    container.style.left = popupLeft + 'px';

    const arrow = container.querySelector('.popup-arrow') as HTMLElement;
    const arrowRect = arrow.getBoundingClientRect();
    const arrowLeft =
      buttonRect.left + buttonRect.width / 2 - arrowRect.width / 2 - popupLeft;

    arrow.style.left = arrowLeft + 'px';

    this.isPopupVisible = ! this.isPopupVisible;

    // const button = document.querySelector('button') as HTMLElement;
    // const buttonRect = button.getBoundingClientRect();
    // const container = document.querySelector('.popup-container') as HTMLElement;
    // const containerRect = container.getBoundingClientRect();

    // this.popupTop = buttonRect.bottom + 10;
    // this.popupLeft =
    //   buttonRect.left + buttonRect.width / 2 - containerRect.width / 2;

    // container.style.top = this.popupTop + 'px';
    // container.style.left = this.popupLeft + 'px';

    // this.isPopupVisible = true;
  }
}
