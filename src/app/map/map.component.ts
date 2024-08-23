import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as env from '../../../src/env';
import { ConfigService } from '../services/config.service';

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

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: this.configService.config['MAPBOX_API_KEY'],
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
}