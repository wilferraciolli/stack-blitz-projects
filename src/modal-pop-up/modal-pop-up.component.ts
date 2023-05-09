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

  constructor() {}

  ngOnInit() {}

  showPopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
