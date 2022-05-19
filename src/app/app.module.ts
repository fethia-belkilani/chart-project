import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafficDeathService } from './traffic-death.service';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule  ,
    FormsModule
  ],
  providers: [TrafficDeathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
