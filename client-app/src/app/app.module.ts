import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScrollToModule } from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { MainWrapperComponent } from './layouts/main-wrapper/main-wrapper.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { WorkingExperienceComponent } from './layouts/working-experience/working-experience.component';
import { OnTheWayComponent } from './layouts/on-the-way/on-the-way.component';
import { UxdComponent } from './layouts/uxd/uxd.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    PortfolioComponent,
    WorkingExperienceComponent,
    OnTheWayComponent,
    UxdComponent,
    ContactComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
