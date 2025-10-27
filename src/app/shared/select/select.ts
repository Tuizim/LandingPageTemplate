import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'select-comp',
  standalone: true,
  templateUrl: './select.html',
  styleUrl: './select.css'
})
export class Select {
  @Input() label = '';
  @Input() options: string[] = [];
  selected = signal('');
  open = signal(false);

  toggle() {
    this.open.update(v => !v);
  }

  selectOption(option: string) {
    this.selected.set(option);
    this.open.set(false);
  }
}
