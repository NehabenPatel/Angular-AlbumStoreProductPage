import { Injectable } from '@angular/core';

import {Http, Response} from '@Angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(id: Number){
      return this._http.get(this.albumUrl).map((response) => response.json());
  }
}
