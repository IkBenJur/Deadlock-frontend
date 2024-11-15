import { Routes } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HomeComponent } from './home/home.component';
import { CreateBuildComponent } from './item-builds/create-build/create-build.component';
import { BuildDetailsComponent } from './item-builds/build-details/build-details.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'hero/:id',
    title: 'Hero details',
    component: HeroDetailsComponent,
  },
  {
    path: 'create-build',
    title: 'Build creation',
    component: CreateBuildComponent,
  },
  {
    path: 'build/:id',
    title: 'Build details',
    component: BuildDetailsComponent,
  }
];
