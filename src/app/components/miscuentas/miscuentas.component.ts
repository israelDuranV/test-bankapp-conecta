import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-miscuentas',
  templateUrl: './miscuentas.component.html',
  styles: []
})
export class MiscuentasComponent implements OnInit {

  saldos:any = {};
  tarjetas:any = {};
  movimientos:any = {};
  constructor( private http: HttpClient) { 
    this.http.get('https://api.sheety.co/fed17b86-497b-4a6e-9388-f38a495dbd43')
    .subscribe( (response: any)=>{
        this.saldos = response;
    });
    this.http.get('https://api.sheety.co/3d6a976a-42d3-405f-b7fa-6959f51c2ff3')
    .subscribe((response: any)=>{
      this.tarjetas = response;
    });
    this.http.get('https://api.sheety.co/372fdc0a-99c0-47de-bae0-ed2b856cce62')
    .subscribe((response: any)=>{
      this.movimientos = response;
    })
  }

  ngOnInit() {
  }

}
