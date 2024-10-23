import { Component, OnInit } from '@angular/core';  // Import OnInit
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fakeMyListings } from '../fake-data';  // Ensure this is correctly pointing to your fake data
import { Listing } from '../type';  // Import your Listing type

@Component({
  selector: 'app-my-listing-page',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']  // Corrected typo in styleUrls
})
export class MyListingPageComponent implements OnInit {  // Implement OnInit
  listings: Listing[] = [];  // Initialize listings

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeMyListings;  // Assign fake listings to the component
    console.log(this.listings);   // Debugging to check listings
  }

  onDeleteClicked(listingId: string): void {
    alert(`Delete your listing with id ${listingId}`);  // Alert for delete action
    // Implement actual delete logic here if needed
  }
}
