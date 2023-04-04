import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  admin:Admin=new Admin();
  message:any;
  username:any;
  password:any;

  constructor(private service:ServiceService,public router:Router) {

   }
   
  public loginadNow(){
       if(!this.username){
      alert('Please provide username');
      return;
    }
    if(!this.password){
      alert('Please provide password');
      return;
    }
    let response=this.service.adminLogin(this.username);
    response.subscribe((data:any)=>this.admin=data);
    console.info(this.admin.password)
    if(this.admin.password==this.password){

      this.router.navigate(['\admin-dashboard']);

    }else{

      this.message="Wrong username or password";
    }

  }

}
