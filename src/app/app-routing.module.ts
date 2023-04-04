import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AdminAddGenreComponent } from './admin-add-genre/admin-add-genre.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { UserAddMovieTicketToCartComponent } from './user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserListOfAllMoviesComponent } from './user-list-of-all-movies/user-list-of-all-movies.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'user-portal', component:UserPortalComponent},
  {path:'admin-portal', component:AdminPortalComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'editMovie/:id',component:EditMovieComponent},
  {path:'admin-add-movie-ticket',component:AddTicketComponent},
  {path:'admin-add-genre',component:AdminAddGenreComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'search-movies',component:SearchMoviesComponent},
  {path:'user-add-movie-ticket-to-cart',component:UserAddMovieTicketToCartComponent},
  {path:'user-cart',component:UserCartComponent},
  {path:'user-list-of-all-movies',component:UserListOfAllMoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
