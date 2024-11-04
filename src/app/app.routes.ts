import { Routes } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: "Home",
    component: HomeComponent,
  },
  {
    path: 'hero/:id',
    title: "Hero details",
    component: HeroDetailsComponent,
  },
];
