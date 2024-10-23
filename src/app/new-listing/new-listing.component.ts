import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-listing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']  // Fixed typo: should be styleUrls
})
export class NewListingComponent implements OnInit {  // Implement OnInit
    name: string= '';
    description: string ='';
    price: string ='';
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {

  }

onSubmit(): void{
  alert('creating a new listing....')
  this.router.navigateByUrl('/my-listings');

}



}
