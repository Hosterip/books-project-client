import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input({required: true}) isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
