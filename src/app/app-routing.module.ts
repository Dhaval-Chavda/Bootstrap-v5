import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { NavsTabsComponent } from './navs-tabs/navs-tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversProgressSpinnersComponent } from './popovers-progress-spinners/popovers-progress-spinners.component';

const routes: Routes = [
  {path: 'badge', component:BadgeComponent},
  {path: 'buttons', component:ButtonsComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'list-group', component: ListGroupComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'navs_tabs', component: NavsTabsComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'offcanvas', component: OffcanvasComponent},
  {path: 'pagination', component: PaginationComponent},
  {path: 'popovers-progress-spinners', component: PopoversProgressSpinnersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
