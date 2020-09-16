import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params: {} = {}, httpOptions = {}) {
    return this.http.get(path, this.buildOptions(params, httpOptions))
  }

  post(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.post(path, payload, this.buildOptions(params, httpOptions))
  }

  put(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.put(path, payload, this.buildOptions(params, httpOptions))
  }

  patch(path: string, payload: {}, params: {} = {}, httpOptions = {}) {
    return this.http.patch(path, payload, this.buildOptions(params, httpOptions))
  }

  delete(path: string, params: {} = {}, httpOptions = {}) {
    return this.http.delete(path, this.buildOptions(params, httpOptions))
  }

  options(path, params: {} = {}, httpOptions = {}) {
    return this.http.options(path, this.buildOptions(params, httpOptions))
  }

  private buildOptions(params: {}, httpOptions = {}) {
    const headers = new HttpHeaders(httpOptions);
    return Object.assign({}, {
      headers,
      params,
      // observe: 'body' // use body to prevent error raise if the timeout exceed
    });
  }

}