import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {

  /* objekt vom typ any */

  airlineList : any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get("https://api.instantwebtools.net/v1/airlines");
    response.subscribe((data)=>this.airlineList=data);
/*     console.log(data));
 */  
  }
}
