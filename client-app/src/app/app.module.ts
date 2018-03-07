import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScrollToModule } from 'ng2-scroll-to';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { MainWrapperComponent } from './layouts/main-wrapper/main-wrapper.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { WorkingExperienceComponent } from './layouts/working-experience/working-experience.component';
import { OnTheWayComponent } from './layouts/on-the-way/on-the-way.component';
import { UxdComponent } from './layouts/uxd/uxd.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { GoTopBtnComponent } from './components/go-top-btn/go-top-btn.component';

import { ScrollService } from './services/scroll.service'; 

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    PortfolioComponent,
    WorkingExperienceComponent,
    OnTheWayComponent,
    UxdComponent,
    ContactComponent,
    TopNavComponent,
    GoTopBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScrollToModule.forRoot(),
    ChartsModule
  ],
  providers: [
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
