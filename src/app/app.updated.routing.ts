import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetbookingComponent } from './getbooking/getbooking.component';
import { BuffetbookingComponent } from './buffetbooking/buffetbooking.component';

const routes: Routes = [
  {
    path: 'bookBuffet',
    component: BuffetbookingComponent
  },
  {
    path: 'getbooking',
    component: GetbookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
