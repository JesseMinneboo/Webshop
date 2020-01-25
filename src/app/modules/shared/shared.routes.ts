import { Routes } from "@angular/router";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { HomeComponent } from "./components/home/home.component";

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
