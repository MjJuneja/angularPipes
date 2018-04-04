import { ResultsComponent } from './Components/results/results.component';
import { OrderBy } from './Pipes/orderby.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchPipe,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
