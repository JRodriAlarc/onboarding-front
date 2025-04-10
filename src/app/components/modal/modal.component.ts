import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() type: 'alert' | 'terms' = 'alert';
  @Input() alertType: 'success' | 'error' | 'info' = 'info';
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

  getAlertIconClass() {
    return {
      'bg-green-100 text-green-600': this.alertType === 'success',
      'bg-red-100 text-red-600': this.alertType === 'error',
      'bg-blue-100 text-blue-600': this.alertType === 'info'
    };
  }
}
