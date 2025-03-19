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
  displayedFlights: Flight[] = [];

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

  filterByAvailability() {
    this.displayedFlights = this.flights.filter(flight => flight.availableSeats > 0);
  }

  resetFilter() {
    this.displayedFlights = [...this.flights]; // Reset to original list
  }

  editFlight(flightId: number) {
    console.log('Edit flight with ID:', flightId);
    // Navigate to edit flight page or open a modal for editing
  }
  
  deleteFlight(flightId: number) {
    if (confirm('Are you sure you want to delete this flight?')) {
      console.log('Deleted flight with ID:', flightId);
      // Call the backend API to delete the flight
    }
  }
  
}