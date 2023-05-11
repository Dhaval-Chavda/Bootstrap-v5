import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {path: 'badge', component:BadgeComponent},
  {path: 'buttons', component:ButtonsComponent},
  {path: 'cards', component: CardsComponent},
  {},
  {},
  {},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
