import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private sharedService: SharedService) {}

  public readonly _destoryAll$ = new ReplaySubject<unknown>();
  length: number = 0;
  ngOnInit(): void {
    this.getLength();
  }
  getLength() {
    this.sharedService
      .getLength()
      .pipe(
        tap((res: any) => {
          this.length = res;
        }),
        takeUntil(this._destoryAll$)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this._destoryAll$.next(undefined);
  }
}
