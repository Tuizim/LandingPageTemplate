import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {}
