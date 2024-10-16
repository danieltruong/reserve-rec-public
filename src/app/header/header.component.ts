import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormsModule } from '@angular/forms';
import { ProfileOffcanvasComponent } from '../profile-offcanvas/profile-offcanvas.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ProfileOffcanvasComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private searchService = inject(SearchService);
  searchBox = '';

  doSearch(): void {
    console.log("Searching for: ", this.searchBox);
    if (this.searchBox !== '') {
      this.searchService.searchForSomething(this.searchBox);
    }
  }
}

// add the token to endpoint calls
// write the form property in angular
