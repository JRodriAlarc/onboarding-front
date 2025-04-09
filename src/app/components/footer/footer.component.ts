import { Component } from '@angular/core';
import { FollowUsComponent } from "../follow-us/follow-us.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FollowUsComponent, ContactUsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
