import { RouterModule, Routes } from '@angular/router';

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

export const RootRouter = RouterModule.forRoot(
  rootRoutes, { useHash: true }
);
