import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  standalone: true,
  templateUrl: './input.html',
  styleUrls: ['./input.css']
})
export class InputField {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() errorMessage = '';
  @Input() invalid = false;
}
