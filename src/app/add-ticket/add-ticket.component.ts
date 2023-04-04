import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieTicketClass } from '../MovieTicketClass';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  movie:MovieTicketClass=new MovieTicketClass();
  genrez:any;
  constructor(private service:ServiceService,public router:Router) { }
  
    ngOnInit(): void {
      let response=this.service.getAllGenre();
      response.subscribe((data:any)=>this.genrez=data);
    }
    
    addMovie() {
     let response= this.service.addMovieTicket(this.movie);
      response.subscribe((data:any)=>this.movie=data);
      this.router.navigate(['/admin-dashboard']);
    }
  
  }
