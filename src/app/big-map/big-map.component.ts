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
      style: 'https://demotiles.maplibre.org/style.json',
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

        if (item._source?.boundary?.type === 'MultiPolygon') {
          console.log(JSON.stringify(item._source?.boundary.coordinates[0]))
          this.map.addSource(`source-${item._id}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: item._source?.boundary?.coordinates[0]
              },
              properties: item._source
            }
          });
          this.map.addLayer({
            'id': `source-${item._id}`,
            'type': 'fill',
            'source': `source-${item._id}`,
            'layout': {},
            'paint': {
              'fill-color': '#088',
              'fill-opacity': 0.8
            }
          });
            const content = `<strong>${item._source.displayName}</strong><p><img src='${item._source.imageUrl}' style='max-width: 225px; max-height: 225px; cursor: pointer;' onclick="window.open('${item._source.imageUrl}', '_blank')"/></p><p>ID: ${item._id.split('#')[1]}</p>`;
          this.map.on('click', `source-${item._id}`, (e) => {
            new maplibregl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(content)
              .addTo(this.map);
          });
        }
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