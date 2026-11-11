
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { IniciComponent } from './inici/inici.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IniciComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
