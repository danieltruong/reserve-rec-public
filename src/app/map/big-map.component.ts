import { Component, OnInit } from '@angular/core';
import { MapComponent, ControlComponent, PopupComponent, MarkerComponent, LayerComponent } from '@maplibre/ngx-maplibre-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  standalone: true,
  selector: 'app-big-map',
  templateUrl: './big-map.component.html',
  styleUrls: ['./big-map.component.css'],
  imports: [MapComponent, ControlComponent, PopupComponent, MarkerComponent, LayerComponent]
})
export class BigMapComponent implements OnInit {

  public map;

  staticData = [
    {
      "_index": "main-index",
      "_id": "place::protectedArea#250",
      "_score": 13.051211,
      "_source": {
        "legalName": "Cape Scott Park",
        "lastUpdated": "2024-10-10T08:00:23.302Z",
        "placeType": "protectedArea",
        "displayName": "Cape Scott Park",
        "orcs": "250",
        "sk": "250",
        "location": {
          "coordinates": [
            -128.133739,
            50.831859
          ],
          "type": "Point"
        },
        "pk": "place::protectedArea",
        "category": "place",
        "creationDate": "2024-09-12T08:00:22.914Z",
        "version": 3,
        "id": "place::protectedArea#250",
        "mapZoom": 0,
        "type": "protectedArea"
      }
    },
    {
      "_index": "main-index",
      "_id": "place::250#wateraccess::1",
      "_score": 5.5225725,
      "_source": {
        "identifier": "1",
        "timezone": "America/Vancouver",
        "description": "This data row is for North Coast Trail - Other Water Access",
        "creationDate": "2024-09-23T20:15:30.705Z",
        "type": "waterAccess",
        "version": 1,
        "lastUpdated": "2024-09-23T20:15:30.705Z",
        "permits": [
          {
            "sk": "backcountryRegistration::1",
            "pk": "permit::250"
          }
        ],
        "featureGroup": "North Coast Trail",
        "name": "Cape Scott Park",
        "sk": "wateraccess::1",
        "pk": "place::250",
        "category": "place",
        "dataSource": "Camis",
        "id": "place::250#wateraccess::1"
      }
    },
    {
      "_index": "main-index",
      "_id": "place::protectedArea#1028",
      "_score": 5.407727,
      "_source": {
        "legalName": "Ugʷiwa'/Cape Caution Conservancy",
        "lastUpdated": "2024-10-10T08:00:23.302Z",
        "placeType": "protectedArea",
        "displayName": "Ugwiwa'/Cape Caution Conservancy",
        "orcs": "1028",
        "sk": "1028",
        "location": {
          "coordinates": [
            -127.64538,
            51.153152
          ],
          "type": "Point"
        },
        "pk": "place::protectedArea",
        "category": "place",
        "creationDate": "2024-09-12T08:00:22.914Z",
        "version": 3,
        "id": "place::protectedArea#1028",
        "mapZoom": 0,
        "type": "protectedArea"
      }
    },
    {
      "_index": "main-index",
      "_id": "place::250#shelter::1",
      "_score": 4.9179115,
      "_source": {
        "identifier": "1",
        "timezone": "America/Vancouver",
        "description": "",
        "creationDate": "2024-09-23T20:15:30.705Z",
        "type": "shelter",
        "version": 1,
        "lastUpdated": "2024-09-23T20:15:30.705Z",
        "permits": [
          {
            "sk": "backcountryRegistration::1",
            "pk": "permit::250"
          }
        ],
        "featureGroup": "North Coast Trail",
        "name": "Cape Scott Ranger Cabin",
        "sk": "shelter::1",
        "location": {
          "coordinates": [
            -128.355812368006,
            50.7876234862651
          ],
          "type": "Point"
        },
        "pk": "place::250",
        "category": "place",
        "dataSource": "Google Maps",
        "id": "place::250#shelter::1"
      }
    },
    {
      "_index": "main-index",
      "_id": "place::protectedArea#1023",
      "_score": 4.435397,
      "_source": {
        "legalName": "Ugʷiwa'/Cape Caution – Blunden Bay Conservancy",
        "lastUpdated": "2024-10-10T08:00:23.302Z",
        "placeType": "protectedArea",
        "displayName": "Ugʷiwa'/Cape Caution – Blunden Bay Conservancy",
        "orcs": "1023",
        "sk": "1023",
        "location": {
          "coordinates": [
            -127.7691,
            51.183952
          ],
          "type": "Point"
        },
        "pk": "place::protectedArea",
        "category": "place",
        "creationDate": "2024-09-12T08:00:22.914Z",
        "version": 3,
        "id": "place::protectedArea#1023",
        "mapZoom": 0,
        "type": "protectedArea"
      }
    },
    {
      "_index": "main-index",
      "_id": "permit::250#backcountryRegistration::1",
      "_score": 4.432591,
      "_source": {
        "permitId": 1,
        "orcs": 250,
        "description": "This data row is for backcountry registration permits within Cape Scott Park",
        "isInventoryFinite": false,
        "creationDate": "2024-09-23T20:15:30.705Z",
        "inventory": [
          null
        ],
        "version": 1,
        "operatingSchedule": null,
        "partyPolicy": 1,
        "lastUpdated": "2024-09-23T20:15:30.705Z",
        "permitType": "backcountryRegistration",
        "name": "Cape Scott Park: Backcountry Registration",
        "sk": "backcountryRegistration::1",
        "bookingPolicy": 1,
        "changePolicy": 1,
        "feePolicy": 1,
        "pk": "permit::250",
        "category": "permit",
        "id": "permit::250#backcountryRegistration::1",
        "identifier": 1,
        "type": "backcountryRegistration"
      }
    },
    {
      "_index": "main-index",
      "_id": "place::250#campground::6",
      "_score": 2.6541185,
      "_source": {
        "identifier": "6",
        "timezone": "America/Vancouver",
        "description": "",
        "creationDate": "2024-09-23T20:15:30.705Z",
        "type": "campground",
        "version": 1,
        "lastUpdated": "2024-09-23T20:15:30.705Z",
        "permits": [
          {
            "sk": "backcountryRegistration::1",
            "pk": "permit::250"
          }
        ],
        "featureGroup": "North Coast Trail",
        "name": "Cape Sutil Campground",
        "sk": "campground::6",
        "location": {
          "coordinates": [
            -128.054431353209,
            50.8699262257818
          ],
          "type": "Point"
        },
        "pk": "place::250",
        "category": "place",
        "dataSource": "Google Maps",
        "id": "place::250#campground::6"
      }
    }
  ];

  ngOnInit() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [-123.19, 48.24],
      zoom: 5,
      maxBounds: [
      [-141.06, 46.30], // Southwest coordinates of BC (approximate)
      [-112.03, 62.00]  // Northeast coordinates of BC (approximate)
      ]
    });
    this.map.addControl(new maplibregl.NavigationControl());
  }

  onMapLoaded() {
    this.staticData.forEach(item => {
      if (item._source.location && item._source.location.coordinates) {
        const displayText = item._source.displayName || item._source.name || 'Unknown';
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
      this.onMapLoaded();
    });
  }
}