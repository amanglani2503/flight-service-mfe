import { Routes } from '@angular/router';
import { AddFlightComponent } from './pages/add-flight/add-flight.component';
import { FlightListComponent } from './pages/flight-list/flight-list.component';

export const routes: Routes = [
    { path: 'add-flight', component: AddFlightComponent},
    { path: 'all-flights', component: FlightListComponent}
];
