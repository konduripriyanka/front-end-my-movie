import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { MovieTicketClass } from './MovieTicketClass';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  MovieUrl:string="http://localhost:8080/api/v1/movieTickets/";
  CartUrl:string="http://localhost:8080/api/v1/cart/";
  AdminUrl:string="http://localhost:8080/api/v1/admin/";
  UserUrl:string="http://localhost:8080/api/v1/user/";
  GenreUrl:string="http://localhost:8080/api/v1/genre/";

  constructor(private http:HttpClient) { }

   public adminLogin(username:any){

    return this.http.get(this.AdminUrl+"getAdmin/"+username);
  }

  public userLogin(uname:any){

    return this.http.get(this.UserUrl+"getUser/"+uname);

  }
  getAllMovieTicketsInCart(){
    return this.http.get(this.CartUrl+"movieTicketss/all");
  }

  deleteMovieTicketFromCart(id: any){
    return this.http.delete(this.CartUrl+"movieTicketss/delete/"+id);
  }

  
  deleteAllMovieTicketsFromCart() {
    return this.http.delete(this.CartUrl+"movieTicketss/delete/all");
  }

  addMovieTicketToCart(movieTicket:any){
    return this.http.get(this.CartUrl+"movieTicketss/add"+movieTicket);
  }

  public getMovies(){
    return this.http.get("http://localhost:8086/api/v1/movieTickets/getallmovie");
    }

  public goToMovieTicketSearch(moviename:any):Observable<MovieTicketClass>{
      return this.http.get<MovieTicketClass>(this.MovieUrl+"getByMovieName/"+moviename);
     }
 

  public goToMovieTicketSearchByGenre(keyword:any){
        return this.http.get(this.MovieUrl+"getAllByGenre/"+keyword);
        }

  public deleteMovie(id:any):Observable<MovieTicketClass>{

      return this.http.delete<MovieTicketClass>(this.MovieUrl+"delete/"+id);
    }

  public updateMovie(id:any,movie:any)
    {
      return this.http.put(this.MovieUrl+"movieTicketUpdate/"+id,movie);
    }
   
  public getMovieById(id:number):Observable<MovieTicketClass>{
      return this.http.get<MovieTicketClass>(this.MovieUrl+"getMovieById/"+id);

    }
    addMovieTicket(movie:any){
      return this.http.post(this.MovieUrl+"add",movie);
    }
    addGenre(genre:any){
      return this.http.post(this.GenreUrl+"addGenre",genre);
    }
    public getAllGenre(){
      return this.http.get(this.GenreUrl+"getallGenre");
      }
     addUser(user:any){
      return this.http.post(this.UserUrl+"addUser",user)
     } 
     addAdmin(admin:any){
      return this.http.post(this.UserUrl+"addAdmin",admin)
     } 
  

}