import { Component, effect } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { DataService } from '../services/data.service';
import { Constants } from '../constants';
import { BigMapComponent } from '../big-map/big-map.component';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../services/loading.service';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [CommonModule, MapComponent, BigMapComponent]
})
export class SearchComponent {
  public data = null;
  public loading = false;


  constructor(private dataService: DataService, private loadingService: LoadingService) {
    effect(() => {
      this.data = this.dataService.watchItem(Constants.dataIds.SEARCH_RESULTS)();
      console.log("Search results: ", this.data);
    });

    effect(() => {
      this.loading = this.loadingService.isLoading();
    });
  }
}