import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http : HttpClient) { }

  getCryptoDetails() {
    return this.http.get('https://api.nomics.com/v1/currencies/ticker?key=21e79e64245cb6eee9a418627cf0a0ea&ids=BTC,ETH&interval=1d,30d&convert=USD&per-page=100&page=1');
  }

  sendMobileUpdate() {
    return this.http.post('http://localhost:3000/sendupdate',{});
  }
}
