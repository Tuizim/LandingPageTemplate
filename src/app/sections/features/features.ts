import { Component, signal } from '@angular/core';

@Component({
  selector: 'features',
  standalone: true,
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
  features = signal([
    { icon: '⚡', title: 'Performance', desc: 'Altíssima velocidade e eficiência.' },
    { icon: '🔒', title: 'Segurança', desc: 'Proteção total dos seus dados.' },
    { icon: '🎨', title: 'Design Moderno', desc: 'Interfaces atraentes e responsivas.' },
  ]);
}
