import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonsComponent,
    CardsComponent,
    ListGroupComponent,
    ModalComponent,
    NavsTabsComponent,
    NavbarComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoversProgressSpinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
