import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router'; // Import necessary modules
import { fakeListings } from '../fake-data';  // Import your fake data
import { Listing } from '../type';  // Import your Listing type

@Component({
  selector: 'app-listing-detail-page',
  standalone: true,
  imports: [RouterModule, RouterLink],  // Ensure RouterModule and RouterLink are imported
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing | undefined;  // Declare 'listing' as a property of type Listing or undefined
  id: string | null = null;  // Declare 'id' to store the route parameter

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch 'id' from route params
   const id = this.route.snapshot.paramMap.get('id');


  //this.listing = fakeListings.find(listing => listing.id === id);
    this.listing = fakeListings.find(listing => listing.id === id);
  }
}
