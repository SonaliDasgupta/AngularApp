import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { LeaderDetailComponent } from '../leader-detail/leader-detail.component';

export const ROUTES : Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'menu', component: MenuComponent},
	{path: 'contactUs', component: ContactComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'dishdetail/:id', component: DishDetailComponent},
	{ path: 'aboutUs', component: AboutComponent},
	{ path: 'leaderdetail/:id', component: LeaderDetailComponent}
];