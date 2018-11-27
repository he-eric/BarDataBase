import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { ModificationComponent } from './modification/modification.component';
import { QueryInterfaceComponent } from './query-interface/query-interface.component';
import { PatternsComponent } from './patterns/patterns.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerDetailsComponent,
    BeersComponent,
    InsightComponent,
    DrinkerDetailsComponent,
    DrinkersComponent,
    ModificationComponent,
    QueryInterfaceComponent,
    PatternsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
