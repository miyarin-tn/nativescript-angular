import { Injectable } from '@angular/core';
import { HttpService } from '@core/services';
import { Observable, Observer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  provider = environment.providers.api;

  constructor(
    private httpService: HttpService
  ) { }

  get<T>(path: string, params: {} = {}): Observable<T> {
    return new Observable((obs: Observer<T>) => {
      this.httpService.get(this.buildPath(path), params)
        .subscribe(
          (res) => {
            obs.next(res as any as T);
            obs.complete();
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          }
        );
    });
  }

  post<T>(path: string, payload: {}, params: {} = {}): Observable<T> {
    return new Observable((obs: Observer<T>) => {
      this.httpService.post(this.buildPath(path), payload, params)
        .subscribe(
          (res) => {
            obs.next(res as any as T);
            obs.complete();
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          }
        );
    });
  }

  put<T>(path: string, payload: {}, params: {} = {}): Observable<T> {
    return new Observable((obs: Observer<T>) => {
      this.httpService.put(this.buildPath(path), payload, params)
        .subscribe(
          (res) => {
            obs.next(res as any as T);
            obs.complete();
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          }
        );
    });
  }

  patch<T>(path: string, payload: {}, params: {} = {}): Observable<T> {
    return new Observable((obs: Observer<T>) => {
      this.httpService.patch(this.buildPath(path), payload, params)
        .subscribe(
          (res) => {
            obs.next(res as any as T);
            obs.complete();
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          }
        );
    });
  }

  delete<T>(path: string, params: {} = {}): Observable<T> {
    return new Observable((obs: Observer<T>) => {
      this.httpService.delete(this.buildPath(path), params)
        .subscribe(
          (res) => {
            obs.next(res as any as T);
            obs.complete();
          },
          (err: HttpErrorResponse) => {
            obs.error(err);
          }
        );
    });
  }

  buildPath(path: string): string {
    return `${this.provider.url}${path}`;
  }
}
