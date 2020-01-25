import { Routes } from "@angular/router";
import { PagenotfoundComponent } from "./pages/pagenotfound/pagenotfound.component";
import { HomeComponent } from "./pages/home/home.component";

export const sharedRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
];
