import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  iFrameWidth: Observable<number>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.iFrameWidth = combineLatest([
      breakpointObserver.observe(['(max-width: 369.99px)']), // Under 370px
      breakpointObserver.observe(['(min-width: 400px)']), // Over 400px
      breakpointObserver.observe(['(min-width: 640px)']), // Over 640px
    ]).pipe(
      map(([under370, over400, over640]) => {
        if (under370.matches) {
          return 300;
        }
        if (over640.matches) {
          return 600;
        }
        if (over400.matches) {
          return 380;
        }
        return 350;
      }),
    );
  }

  ngOnInit(): void {}
}
