import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Listing } from '../type';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
email: string=''
message: string=''
listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}


  ngOnInit(): void{
const id = this.route.snapshot.paramMap.get('id');
this.listing = fakeListings.find(listing => listing.id === id);
this.message = `Hi, I"m intrested in your ${this.listing?.name.toLocaleLowerCase()}!`;
  }

  sendMessage(): void{
    alert('your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
