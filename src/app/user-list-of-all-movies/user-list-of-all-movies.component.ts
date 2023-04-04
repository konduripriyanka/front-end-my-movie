import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartClass } from '../CartClass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-list-of-all-movies',
  templateUrl: './user-list-of-all-movies.component.html',
  styleUrls: ['./user-list-of-all-movies.component.css']
})
export class UserListOfAllMoviesComponent implements OnInit {

  public movieTickets: any;
  id:any;
  cart:CartClass=new CartClass();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {

  }
  makePayment(){

    }
}
