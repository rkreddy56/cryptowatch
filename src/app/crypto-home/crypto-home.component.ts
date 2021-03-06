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
  ETH : any;
  BTC : any;
  IETH : any;
  IBTC : any;
  counter = 0;

  constructor(private cryptoService : CryptoService, private db : AngularFireDatabase) { }

  ngOnInit(): void {
    this.items = this.db.object('/Bitcoin');
    setInterval(()=> {
      this.getData();
    },15000)
  }

  getData() {
    setInterval(()=> {
      this.counter = 0;
    },30000)
    this.cryptoService.getCryptoDetails().subscribe(data => {
      this.cryptoData = data;
      if(this.counter === 0){
        this.IBTC = this.cryptoData[0]['price'];
        this.IETH = this.cryptoData[0]['price'];
      }
      this.BTC = this.cryptoData[0]['price'];
      this.ETH = this.cryptoData[0]['price'];
      if(this.ETH < this.IETH) {
        if((this.IETH - this.ETH > 5 && this.IETH - this.ETH < 10)) {
          this.sendUpdate(this.ETH,'5-10 DUMP')
        }else if((this.IETH - this.ETH > 10 && this.IETH - this.ETH < 15)) {
          this.sendUpdate(this.ETH,'10-15 DUMP')
        }
      }else {
        if((this.ETH - this.IETH > 5 && this.ETH - this.IETH < 10)) {
          this.sendUpdate(this.ETH,'5-10 RISE')
        }else if((this.ETH - this.IETH > 10 && this.ETH - this.IETH < 15)) {
          this.sendUpdate(this.ETH,'10-15 RISE')
        }
      }
      if(this.BTC < this.IBTC) {
        if((this.IBTC - this.BTC > 5 && this.IBTC - this.BTC < 10)) {
          this.sendUpdate(this.BTC,'5-10 DUMP')
        }else if((this.IBTC - this.BTC > 10 && this.IBTC - this.BTC < 15)) {
          this.sendUpdate(this.BTC,'10-15 DUMP')
        }
      }else {
        if((this.BTC - this.IBTC > 5 && this.BTC - this.IBTC < 10)) {
          this.sendUpdate(this.BTC,'5-10 RISE')
        }else if((this.BTC - this.IBTC > 10 && this.BTC - this.IBTC < 15)) {
          this.sendUpdate(this.BTC,'10-15 RISE')
        }
      }
    }) 
  }

  sendUpdate(value: any,diff: string) {
    this.items.update({value : value, difference : diff });
  }

}
