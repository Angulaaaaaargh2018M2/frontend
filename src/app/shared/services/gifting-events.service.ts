import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gift} from '../interfaces/gift';
import {GiftingEvent} from '../interfaces/giftingEvent';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiftingEventsService {

  private readonly _backendURL: any;

  constructor(private  _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }
    // build all backend urls
    Object.keys(environment.backend.endpoints.giftingEvents)
      .forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints.giftingEvents[ k ]}`);

  }

  fetch(): Observable<GiftingEvent[]> {
    return this._http.get<GiftingEvent[]>(this._backendURL.allGiftingEvents)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  /**
   * Function to return one gift for current id
   */
  fetchOne(id: number): Observable<GiftingEvent> {
    return this._http.get<GiftingEvent>(this._backendURL.oneGiftingEvent.replace(':id', id));
  }

  /**
   * Function to return request options
   */
  private _options(headerList: Object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }


  //TODO : Add missing methods
}
