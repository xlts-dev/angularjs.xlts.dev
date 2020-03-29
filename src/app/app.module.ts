import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { ScreenTrackingService } from '@angular/fire/analytics';
import { AngularFirePerformanceModule } from '@angular/fire/performance';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
