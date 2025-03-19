import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})
export class AddFlightComponent {
  flight = {
    airline: '',
    departure: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    availableSeats: 0,
    price: 0
  };

  onSubmit() {
    console.log('Submitted Flight Data:', this.flight);
    alert('Flight data submitted! Check the console for details.');
  }
}