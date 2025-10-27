import { Component } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Hero } from './sections/hero/hero';
import { Features } from './sections/features/features';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Cta } from './sections/cta/cta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Hero, Features, About, Contact, Cta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
