import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Response } from '../interface/responseInterface';
import { BackendApiService } from './services/backend-api.service'; 

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {
  airlineInterface: any ;

  /* objekt vom typ any */

  airlineList : any;

  constructor(private backendApi: BackendApiService) { }

  async ngOnInit() {
    this.airlineList= await this.backendApi.getAirlines();
  /*  console.log(this.airlineList);  */
  this.airlineInterface=  this.airlineList;
   
   
     }
     

}
