import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-forms',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header-forms.component.html',
  styleUrl: './header-forms.component.css'
})
export class HeaderFormsComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }
}
