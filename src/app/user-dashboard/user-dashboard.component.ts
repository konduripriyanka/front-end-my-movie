import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicketClass } from '../MovieTicketClass';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  movies:any;
  message:any;
  genrez:any;
  genreKeyword:any;
  search:any;
  constructor(private service:ServiceService, private router: Router) { }


  ngOnInit(): void {
     let response=this.service.getMovies();
    response.subscribe((data:any)=>this.movies=data);
    let response2=this.service.getAllGenre();
    response2.subscribe((data:any)=>this.genrez=data);


  }
  getMovies(){
    let response=this.service.getMovies();
    response.subscribe((data:any)=>this.movies=data);
  }
  addMovieTicketToCart(){
    this.router.navigate(['/user-add-movie-ticket-to-cart']);
  }

  goToCart(){
    this.router.navigate(['/user-cart']);
  }
 public getMovieByKeyword(){
  let response=this.service.goToMovieTicketSearch(this.search);
  response.subscribe((data:any)=>this.movies=data);
  }
goToMovieTicketSearchByGenre(){
  let response=this.service.goToMovieTicketSearchByGenre(this.genreKeyword);
    response.subscribe((data:any)=>this.movies=data);
}

}
