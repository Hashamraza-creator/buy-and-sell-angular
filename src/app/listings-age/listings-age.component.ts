import { fakeListings } from '../fake-data';
import { Listing } from './../type';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { RouterModule } from '@angular/router';  // Import RouterModule for routerLink

@Component({
  selector: 'app-listings-age',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Add RouterModule here
  templateUrl: './listings-age.component.html',
  styleUrls: ['./listings-age.component.css']
})
export class ListingsAgeComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
