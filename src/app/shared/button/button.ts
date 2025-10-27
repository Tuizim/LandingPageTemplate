import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-comp',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label = 'Clique';
  @Input() variant: 'primary' | 'outline' | 'secondary' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Output() click = new EventEmitter<Event>();
}
