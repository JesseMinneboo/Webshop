import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/pagenotfound/page-not-found.component";
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
    component: PageNotFoundComponent
  },
];
