import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public GH_HASH: string;
  constructor(private configService: ConfigService) {
  }
  ngOnInit() {
    this.GH_HASH = this.configService.config.GH_HASH;
  }
}
