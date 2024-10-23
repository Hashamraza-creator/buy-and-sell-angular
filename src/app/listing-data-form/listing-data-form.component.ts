import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Listing } from '../type';

@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']  // Fixed typo from `styleUrl` to `styleUrls`
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() name!: string;  // Define as @Input
  @Input() description!: string;  // Define as @Input
  @Input() price!: number;  // Use `number` instead of `Number`

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onButtonClicked(): void {
    // Emit the listing data when the button is clicked
    this.onSubmit.emit({
      id: '',  // Change to an appropriate id if necessary
      name: this.name,
      description: this.description,
      price: Number(this.price),  // Ensure the price is a number
    });
  }
}
