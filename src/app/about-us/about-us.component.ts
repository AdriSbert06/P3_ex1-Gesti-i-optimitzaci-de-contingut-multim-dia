import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-about-us',
  standalone: true,
  styleUrl: './about-us.component.css',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {}