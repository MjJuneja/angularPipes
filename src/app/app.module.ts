import { SearchPipe } from './app.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {OrderBy} from './sort.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,SearchPipe,OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
