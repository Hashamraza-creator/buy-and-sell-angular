import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ListingsAgeComponent } from './listings-age/listings-age.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListingsAgeComponent, ListingDetailPageComponent, ContactPageComponent
    ,MyListingPageComponent, NewListingComponent, EditListingPageComponent,RouterModule,RouterLink,ListingDataFormComponent,NavBarComponent], // Single imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'buy-and-sell';
}
