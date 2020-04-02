import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutes } from './app-routes';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './banner/banner.component';
import { LtsComponent } from './lts/lts.component';
import { XltsComponent } from './xlts/xlts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    BannerComponent,
    ContactFormComponent,
    LtsComponent,
    XltsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'corrected',
    }),
    ScullyLibModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
