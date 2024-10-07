import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']  // Fixed styleUrls typo
})
export class ListingDetailPageComponent implements OnInit {  // Implements OnInit
  id: string | null = null;  // Declare 'id' to store the route parameter

  constructor(
    private route: ActivatedRoute  // Inject ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');  // Fetch 'id' from route params
  }
}
