import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class AppCard {
  @Input() image = '';
  @Input() title = '';
  @Input() desc = '';
  @Input() price?: string;
}
