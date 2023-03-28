import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';
import { AppContainerComponent } from './common/app-container/app-container.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PositionsComponent } from './positions/positions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AppContainerComponent,
    MainComponent,
    DashboardComponent,
    PositionsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    CdkTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
