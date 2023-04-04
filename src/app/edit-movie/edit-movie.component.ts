import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTicketClass } from '../MovieTicketClass';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit{

  movie:MovieTicketClass;
  id:string|null;
  registerForm:FormGroup;
  submitted:boolean=false;
  constructor(private service:ServiceService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getMovieById(Number(this.id)).subscribe(x=>this.movie=x);

    this.registerForm=this.builder.group({
      movieName:['',Validators.required],
      price:['',Validators.required]

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.updateMovie(Number(this.id),this.movie).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['./admin-dashboard'])
      }
  }

}
