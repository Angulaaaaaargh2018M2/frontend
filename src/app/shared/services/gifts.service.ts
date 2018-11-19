import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Gift} from '../interfaces/gift';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';
import {GiftingEvent} from '../interfaces/giftingEvent';

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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }, headerList)) };
  }

  /**
   * Function to create a new gift
   */
  create(gift: Gift): Observable<any> {
    return this._http.post<Gift>(this._backendURL.allGifts, gift, this._options());
  }

  sendOneEmail(id: string, email: string): Observable<any> {
    return this._http.get(this._backendURL.sendOneEmail.replace(':id', id).replace(':email', email));
  }

  sendEmail(id: string){
    return this._http.get(this._backendURL.sendEmail.replace(':id', id));
  }
}
