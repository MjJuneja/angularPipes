import { ResultsApi } from './results.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ResultsApi]
})
export class ResultsComponent implements OnInit {
  query: string = '';
  title = 'app';
  public json;
  public myClass: string = 'fa fa-arrow-down';
  public target = false;
  public fetchedData: Object;
  constructor(private resultsApi: ResultsApi) {

  }

  private showData = (list): any => {
    this.json = list.json;
  }

  public filter = (): any => {
    this.target = !this.target;
    if (this.myClass == 'fa fa-arrow-down') {
      this.myClass = 'fa fa-arrow-up';
    } else{
      this.myClass = 'fa fa-arrow-down';
    }

  }

  private getData(): any {
    this.resultsApi.fetchData().then(data => {
      for (let i = 0; i < data.length; i++) {
        data[i].json = JSON.stringify(data[i]);
      }
      this.fetchedData = data;
    });
  }

  ngOnInit() {

    this.getData();
    Observable.interval(10000).subscribe(x => {
      this.getData();
    });

  }

}
