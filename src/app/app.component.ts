import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  on,
  off,
  launchEvent,
  resumeEvent,
  suspendEvent,
  LaunchEventData,
  ApplicationEventData
} from 'tns-core-modules/application';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// others
import { loginEvent, logoutEvent } from '@core/constants/event';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  private destroy$: Subject<any> = new Subject();

  constructor() {
    on(launchEvent, (args: LaunchEventData) => {
      console.log('----> APP LAUNCH!');
      if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log('Launched Android application with the following intent: ' + args.android + '.');
      } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log('Launched iOS application with options: ' + args.ios);
      }
    });

    on(suspendEvent, (args: ApplicationEventData) => {
      console.log('----> APP SUSPEND!');
      if (args.android) {
        // For Android applications, args.android is an android activity class.
      } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.

      }
    });

    on(resumeEvent, (args: ApplicationEventData) => {
      console.log('----> APP RESUME!');
      if (args.android) {
        // For Android applications, args.android is an android activity class.
      } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
      }
    });
  }

  ngOnInit(): void {
    console.log('----> APP INIT!');
    loginEvent.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // login handle
    });
    logoutEvent.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // logout handle
    });
  }

  ngOnDestroy() {
    console.log('----> APP DESTROY!');
    this.destroy$.next();
    this.destroy$.complete();
    off([launchEvent, suspendEvent, resumeEvent].join(','));
  }
}
