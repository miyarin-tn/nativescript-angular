import { Component, OnInit, OnDestroy } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Subject } from 'rxjs';

@Component({
  selector: 'ns-shared-layout-root',
  templateUrl: './shared-layout-root.component.html',
  styleUrls: ['./shared-layout-root.component.scss']
})
export class SharedLayoutRootComponent implements OnInit, OnDestroy {

  isShowNotify = false;
  private destroy$: Subject<any> = new Subject();

  constructor(
    private page: Page
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
