import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Gift} from '../interfaces/gift';
import {Observable} from 'rxjs';
import {GIFTS} from '../../_static/bdd';

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
      Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);

  }

  /**
   * Function to return one gift for current id
   */


  fetchOne(id: number): Observable<Gift> {
    return this._http.get<Gift>(this._backendURL.oneGift.replace(':id', id));
  }

  //TODO : Connect to backend

}
