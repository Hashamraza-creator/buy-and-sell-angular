import { Routes } from '@angular/router';
import { ListingsAgeComponent } from './listings-age/listings-age.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { NewListingComponent } from './new-listing/new-listing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' }, // Fixed redirectTo syntax
  { path: 'listings', component: ListingsAgeComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailPageComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit-listing/:id', component: EditListingPageComponent },
  { path: 'my-listings', component: EditListingPageComponent },
  { path: 'new-listings', component: NewListingComponent }
];
