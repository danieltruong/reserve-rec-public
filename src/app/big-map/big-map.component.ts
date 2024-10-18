import { AfterViewInit, Component, effect, OnInit } from '@angular/core';
import { MapComponent, ControlComponent, PopupComponent, MarkerComponent, LayerComponent } from '@maplibre/ngx-maplibre-gl';
import maplibregl from 'maplibre-gl';
import { Constants } from '../constants';
import { DataService } from '../services/data.service';

@Component({
  standalone: true,
  selector: 'app-big-map',
  templateUrl: './big-map.component.html',
  styleUrls: ['./big-map.component.scss'],
  imports: [MapComponent, ControlComponent, PopupComponent, MarkerComponent, LayerComponent]
})
export class BigMapComponent implements OnInit, AfterViewInit {
  public map;
  public data = [];

  private mapLoaded = false;

  constructor(private dataService: DataService) {
    effect(() => {
      this.data = this.dataService.watchItem(Constants.dataIds.SEARCH_RESULTS)()
      if (this.mapLoaded) {
        this.updateMap();
      }
    });
  }

  ngOnInit() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/hybrid/style.json?key=wOk2yuh64kuoeWA7cTAK',
      center: [-123.19, 48.24],
      zoom: 5,
      maxBounds: [
        [-141.06, 46.30], // Southwest coordinates of BC (approximate)
        [-112.03, 62.00]  // Northeast coordinates of BC (approximate)
      ]
    });
    this.map.addControl(new maplibregl.NavigationControl());
  }

  updateMap() {
    this.data.forEach(item => {
      if (item._source.location && item._source.location.coordinates) {
        // const displayText = item._source.displayName || item._source.name || 'Unknown';
        const popupContent = Object.entries(item._source)
          .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
          .join('<br>');
        new maplibregl.Marker()
          .setLngLat([item._source.location.coordinates[0], item._source.location.coordinates[1]])
          .setPopup(new maplibregl.Popup({ offset: 25 }).setHTML(popupContent))
          .addTo(this.map);
      }
    });
  }

  ngAfterViewInit() {
    this.map.on('load', () => {
      this.mapLoaded = true;
      this.updateMap();
    });
  }
}