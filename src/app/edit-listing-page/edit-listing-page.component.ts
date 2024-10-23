import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { Listing } from '../type';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent],
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing!: Listing; // Declare the listing property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      // Directly use the string `id` from the route, no need to convert to number
      const foundListing = fakeMyListings.find(listing => listing.id === id);
      if (foundListing) {
        this.listing = foundListing;
      } else {
        // Handle the case where no listing is found, e.g., redirect or show error
        alert('Listing not found');
        this.router.navigateByUrl('/my-listings');
      }
    }
  }

  onSubmit(listing: Listing): void {
    alert(`Saving changes to listing: ${listing.name}`);
    this.router.navigateByUrl('/my-listings');
  }
}
