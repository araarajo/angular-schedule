import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'test', component: HomeComponent }
  ]},
];

export const HomeRouter = RouterModule.forChild(homeRoutes);
