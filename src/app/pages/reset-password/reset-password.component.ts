import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ResetPasswordFormComponent } from "../../components/forms/reset-password-form/reset-password-form.component";

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FooterComponent, ResetPasswordFormComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

}
