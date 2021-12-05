import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpclient: HttpClient) { }

  getAcoes() {
    return this.httpclient.get<any>('http://localhost:3000/acoes');
  }
}
