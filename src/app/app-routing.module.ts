import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Dedicated module for routing

// Define routes here and the components they should load
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, // The ':' represented a parametrised route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Auto redirect to the dashboard
];

@NgModule({
  // Router is configured at the app root level, configured with the routes
  imports: [RouterModule.forRoot(routes)],
  // Exports it so the routes can be available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
