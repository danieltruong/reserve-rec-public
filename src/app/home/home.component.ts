import { Component, OnInit } from '@angular/core';
import { fetchAuthSession, signInWithRedirect, signOut } from 'aws-amplify/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() { }

  async ngOnInit() {
    const session = await fetchAuthSession();
    console.log("session", session);
  }

  public async onLoginCLick() {
    await signInWithRedirect();
  }
  public async onLogoutCLick() {
    await signOut();
  }

}
