import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHttpmessageService } from './services/process-httpmessage.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'


import { LeaderDetailComponent } from './leader-detail/leader-detail.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { baseURL } from './shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restconfig';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LeaderDetailComponent,
    LoginComponentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ DishService, PromotionService, LeaderService , ProcessHttpmessageService,
  {provide: 'BaseURL', useValue: baseURL}],
  entryComponents: [LoginComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
