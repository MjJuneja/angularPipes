import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResultsApi {
  constructor(private http: Http) { }
  fetchData() {
    var url = environment.serverUrl + environment.resultsApi;
    return this.http.get(url).toPromise().then((response) => {
      return response.json().hits;
    }).catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
