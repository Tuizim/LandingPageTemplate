import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputField {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
}
