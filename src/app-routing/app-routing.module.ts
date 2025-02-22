import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MWComponent } from '../mw/mw.component';
import { AchievementsComponent } from '../achievements/achievements.component';
//import { Component2 } from './components/component2.component';

const routes: Routes = [
  { path: 'mw', component: MWComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
