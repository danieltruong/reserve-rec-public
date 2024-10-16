import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-offcanvas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './profile-offcanvas.component.html',
  styleUrl: './profile-offcanvas.component.scss'
})
export class ProfileOffcanvasComponent {
  public username = "Campy McCampface";
}
