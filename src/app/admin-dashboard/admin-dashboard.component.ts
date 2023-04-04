import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../GenreClass';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  movies:any;
  message:any;
 
  constructor(private service:ServiceService) { }


  ngOnInit(): void {
     let response=this.service.getMovies();
    response.subscribe((data:any)=>this.movies=data);

  }
deleteMovie(id:any){
let response=this.service.deleteMovie(id);
response.subscribe((data:any)=>this.message=data);
}


}
