import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-cards',
  standalone: true,
  styleUrl: './cards.component.css',
  templateUrl: './cards.component.html',
})
export class CardsComponent {}
