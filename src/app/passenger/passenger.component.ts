import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  constructor(private http:HttpClient) { }
 
  passengerList : any;
  ngOnInit() {
    let response = this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=24");
    response.subscribe((data)=>this.passengerList=data); 
/*     console.log(data));
 */  
  }
}

