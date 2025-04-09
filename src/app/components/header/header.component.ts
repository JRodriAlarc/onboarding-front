import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() name:string = 'Juan Pérez';

  constructor(private router: Router) {}

  logout() {
    // Llamar al servicio de autenticación para manejar el cierre de sesión

    // Redirigir al usuario a la página de login
    this.router.navigate(['/auth']);
  }

}
