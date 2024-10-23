import { Routes } from '@angular/router';
import { ListingsAgeComponent } from './listings-age/listings-age.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';  // Import the form component

export const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },  // Default route
  { path: 'listings', component: ListingsAgeComponent, pathMatch: 'full' },  // All listings
  { path: 'listings/:id', component: ListingDetailPageComponent },  // Listing details
  { path: 'contact/:id', component: ContactPageComponent },  // Contact listing owner
  { path: 'edit-listing/:id', component: EditListingPageComponent },  // Edit specific listing
  { path: 'my-listings', component: MyListingPageComponent },  // Manage user's listings
  { path: 'new-listing', component: NewListingComponent },  // Create a new listing
  { path: 'data', component: ListingDataFormComponent }  // Data form for creating/updating listings
];
