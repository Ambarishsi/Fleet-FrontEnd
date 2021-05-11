import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'admin-helpdesk',
    loadChildren: () => import('./admin-helpdesk/admin-helpdesk.module').then( m => m.AdminHelpdeskPageModule)
  },
  {
    path: 'tech-support',
    loadChildren: () => import('./tech-support/tech-support.module').then( m => m.TechSupportPageModule)
  },
  {
    path: 'roaster',
    loadChildren: () => import('./roaster/roaster.module').then( m => m.RoasterPageModule)
  },  {
    path: 'trip-info',
    loadChildren: () => import('./trip-info/trip-info.module').then( m => m.TripInfoPageModule)
  },
  {
    path: 'schedule-info',
    loadChildren: () => import('./schedule-info/schedule-info.module').then( m => m.ScheduleInfoPageModule)
  },
  {
    path: 'live-tracking',
    loadChildren: () => import('./live-tracking/live-tracking.module').then( m => m.LiveTrackingPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
