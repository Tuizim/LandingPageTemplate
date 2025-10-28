import { Component, signal } from '@angular/core';
import { AppCard } from '../../shared/card/card';

interface FoodItem {
  image: string;
  title: string;
  desc: string;
  price: string;
}

@Component({
  selector: 'food-menu',
  standalone: true,
  imports: [AppCard],
  templateUrl: './food-menu.html',
  styleUrl: './food-menu.css'
})
export class FoodMenuSection {
  items = signal<FoodItem[]>([
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/97/f4/db/classic-burger.jpg',
      title: 'Classic Burger',
      desc: 'Brioche bun, 180g beef blend, cheddar cheese, house mayo.',
      price: '$8.90'
    },
    {
      image: 'https://www.seara.com.br/wp-content/uploads/2025/09/x-bacon-portal-minha-receita.jpg',
      title: 'Bacon Burger',
      desc: 'Cheddar crust, crispy bacon, and our special sauce.',
      price: '$9.90'
    },
    {
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg',
      title: 'Triple Burguer',
      desc: 'Brioche bun, 3x120g beef blend, cheddar cheese, house mayo.',
      price: '$13.50'
    }]);
}
