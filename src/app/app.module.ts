import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CntDeptOncComponent } from './cnt-dept-onc/cnt-dept-onc.component';
import { CntDeptGyncComponent } from './cnt-dept-gync/cnt-dept-gync.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    GalleryComponent,
    EventComponent,
    DoctorsComponent,
    CntDeptOncComponent,
    CntDeptGyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
