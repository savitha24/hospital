import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
//import { TaskSectionComponent } from './task-section/task-section.component';



const routes: Routes = [
// { path: 'task/order_manager', component: TaskSectionComponent },
   { path: '', component: HomeComponent },
   { path: 'About', component: AboutComponent },
   { path: 'Contact', component: ContactComponent },

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
