import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MapComponent, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'reserve-rec-public';
  public isAuthenticed = false;
  public session;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  async ngOnInit() {
    try {
      // Check if user is already signed in, throws if not
      await getCurrentUser();
      this.isAuthenticed = true;
    } catch (e) {
      console.log(e);
    }

    // Change this to a back-end service.
    const self = this;
    setInterval(async () => {
      self.session = await fetchAuthSession();

      if (self?.session?.tokens?.idToken?.payload != null) {
        self.isAuthenticed = true;
      } else {
        self.isAuthenticed = false;
      }
      self.changeDetectorRef.detectChanges();
    }, 15000);
  }
}
