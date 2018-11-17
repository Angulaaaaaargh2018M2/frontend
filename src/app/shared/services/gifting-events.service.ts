import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftingEventsService {

  constructor() {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }
    // build all backend urls
    Object.keys(environment.backend.endpoints.giftingEvents).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints.giftingEvents[ k ]}`);

  }

  //TODO : Add missing methods
}
