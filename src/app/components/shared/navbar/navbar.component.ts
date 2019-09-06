import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  cuentas:any = {};
  constructor( private http: HttpClient) { 
    this.http.get('https://api.sheety.co/7ce411a1-17b6-41e5-b67c-55b3ac5df463')
    .subscribe( (response: any)=>{
        this.cuentas = response;
    })
  }

  ngOnInit() {
  }

}
