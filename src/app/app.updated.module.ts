import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormatPlateCountPipe } from './getbooking/plateCount.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuffetbookingComponent } from './buffetbooking/buffetbooking.component';
import { GetbookingComponent } from './getbooking/getbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    BuffetbookingComponent,
    GetbookingComponent,
    FormatPlateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
