import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  public movieTickets: any;
  public userDetails: any;

  constructor(private service: ServiceService,
             
              private router: Router) { }

  ngOnInit(): void {
    
    this.getAllMovieTicketsFromCart();
  }

  

  getAllMovieTicketsFromCart() {
    this.service.getAllMovieTicketsInCart().subscribe(data => {
      this.movieTickets = data;
    });
  }

  goToPayment() {
    this.router.navigate(['/user-make-payment']);
  }

}
