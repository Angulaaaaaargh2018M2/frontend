import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Gift} from '../interfaces/gift';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {
      this._backendURL = {};

      // build backend base url
      let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
      if (environment.backend.port) {
        baseUrl += `:${environment.backend.port}`;
      }
      // build all backend urls
      Object.keys(environment.backend.endpoints.gifts)
        .forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints.gifts[ k ]}`);

  }

  /**
   * Function to return all gifts
   */
  fetch(): Observable<Gift[]> {
    return this._http.get<Gift[]>(this._backendURL.allGifts)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  fetchForGiftingEvent(giftingEventId: number): Observable<Gift[]> {
      return this._http.get<Gift[]>(this._backendURL.allGiftsForGiftingEvent.replace(':giftingEventId', giftingEventId))
        .pipe(
          filter(_ => !!_),
          defaultIfEmpty([])
        );
  }

  /**
   * Function to return one gift for current id
   */
  fetchOne(id: number): Observable<Gift> {
    return this._http.get<Gift>(this._backendURL.oneGift.replace(':id', id));
  }


  /**
   * Function to return request options
   */
  private _options(headerList: Object = {}): any {
    return { headers: new HttpHeaders(Object.assign({
        'Content-Type': 'application/json'
      }, headerList)) };
  }

  /**
   * Function to create a new gift
   */
  create(gift: Gift): Observable<any> {
    // console.log(gift);
    // console.log(this._backendURL.allGifts);
    return this._http.post<Gift>(this._backendURL.allGifts, gift, this._options());
  }

  sendOneEmail(id: string, email: string) {
    return this._http.get<any>(this._backendURL.sendOneEmail.replace(':id', id).replace(':email', email)).subscribe();
  }

  sendEmail(id: string) {
    return this._http.get(this._backendURL.sendEmail.replace(':id', id)).subscribe();
  }

  /**
   * Function to delete one gift for current id
   */
  delete(id: string): Observable<string> {
    return this._http.delete(this._backendURL.oneGift.replace(':id', id))
      .pipe(
        map(_ => id)
      );
  }
}
