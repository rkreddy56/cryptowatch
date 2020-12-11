import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../service/cryptoservice.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-crypto-home',
  templateUrl: './crypto-home.component.html',
  styleUrls: ['./crypto-home.component.scss']
})
export class CryptoHomeComponent implements OnInit {
  cryptoData: any = [];
  items: any;

  constructor(private cryptoService : CryptoService, private db : AngularFireDatabase) { }

  ngOnInit(): void {
    this.items = this.db.object('/Bitcoin');
    setInterval(()=> {
      this.getData();
    },15000)
  }

  getData() {
    this.cryptoService.getCryptoDetails().subscribe(data => {
      this.cryptoData = data;
    }) 
  }

  sendUpdate() {
    this.items.update({value : '656565'});
  }

}
