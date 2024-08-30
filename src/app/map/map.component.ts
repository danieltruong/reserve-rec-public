import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ConfigService } from '../services/config.service';
import { SearchService } from '../services/search.service';
import { DataService } from '../services/data.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Constants } from '../constants';

@Component({
  standalone: true,
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = 48.4359;
  lng: number = -123.3515;
  public subscriptions = new Subscription();
  public items = [];
  public list = new BehaviorSubject([]);

  constructor(
    private configService: ConfigService,
    private searchService: SearchService,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: this.configService.config['MAPBOX_API_KEY'],
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
    await this.searchService.fetchAll();
    this.subscriptions.add(
      this.dataService.watchItem(Constants.dataIds.ALL).subscribe((data) => {
        console.log("data", data);
        if (data?.length) {
          // Set data somewhere
        } else {
          this.list.next([]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.cdr.detectChanges();
  }
}