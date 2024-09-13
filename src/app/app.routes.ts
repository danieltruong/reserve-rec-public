import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component'; // Import the component you want to route to
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent } // Add a new route for the HomeComponent
];