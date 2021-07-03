import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPanelComponent } from './view-panel/view-panel.component';

const routes: Routes = [
  { 'path':'', 'redirectTo':'/home', 'pathMatch':'full' },
  { path: 'home', component:ViewPanelComponent , pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
