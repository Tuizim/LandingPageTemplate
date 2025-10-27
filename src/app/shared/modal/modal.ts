import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
}
