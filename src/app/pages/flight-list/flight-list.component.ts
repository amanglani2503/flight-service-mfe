import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Flight {
  id: number;
  airline: string;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  availableSeats: number;
  price: number;
}

@Component({
  selector: 'app-flight-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css'
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];

  // constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    // this.loadFlights();
  }

  // loadFlights() {
  //   this.flightService.getFlights().subscribe(data => {
  //     this.flights = data;
  //   }, error => {
  //     console.error('Error fetching flights', error);
  //   });
  // }
}