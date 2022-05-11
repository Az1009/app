import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesComponent } from './airlines/airlines.component';
import { PassengerComponent } from './passenger/passenger.component';


/* Verlinkung  */
const routes: Routes = [{path:'', component:AirlinesComponent},
{path: 'passenger', component:PassengerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
