import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { firstValueFrom } from 'rxjs';
/* import {passengerInterface } from './interface/passengerInterface';
 */@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  

  constructor(private http:HttpClient) { }

   async getAirlines(){
   await firstValueFrom(this.http.get("https://api.instantwebtools.net/v1/airlines"));
        }

         async getAirlinesById(id: number){
          await firstValueFrom(this.http.get("https://api.instantwebtools.net/v1/airlines/"+id))
            
              
               
               } 
               private processResponse(response:Data ): Data{
                 return{
                   data: {...response['data'].name},
                 };
               }

              }
            
  
  

