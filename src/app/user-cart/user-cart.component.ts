import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  public movieTickets: any;

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getAllMovieTicketsFromCart();
  }

  getAllMovieTicketsFromCart() {
    this.service.getAllMovieTicketsInCart().subscribe(data => {
      this.movieTickets = data;
    });
  }

  deleteMovieTicketFromCart() {
    
  }

  goToCheckout() {
    this.router.navigate(['/user-checkout']);
  }

}
