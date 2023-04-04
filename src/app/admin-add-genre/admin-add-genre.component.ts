import { Component, OnInit } from '@angular/core';
import { GenreClass } from '../GenreClass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-add-genre',
  templateUrl: './admin-add-genre.component.html',
  styleUrls: ['./admin-add-genre.component.css']
})
export class AdminAddGenreComponent implements OnInit {

  genrez:GenreClass=new GenreClass();
  genre:any;
  
  genres:any;
  
  constructor(private service:ServiceService) { }
  
  ngOnInit(): void {
    let response=this.service.getAllGenre();
    response.subscribe((data:any)=>this.genres=data);
    
  }

  public addGenre(){
   
    let response=this.service.addGenre(this.genrez)
    response.subscribe((data:any)=>this.genrez=data);
  }

}
