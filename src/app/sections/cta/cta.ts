import { Component } from '@angular/core';
import { Button } from "../../shared/button/button";

@Component({
  selector: 'cta',
  standalone: true,
  imports: [Button],
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {}
