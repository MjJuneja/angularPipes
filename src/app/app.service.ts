import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppApi{
    Data:String
    constructor(private http:Http){}
    fetchData(){
    var url ="https://hn.algolia.com/api/v1/search_by_date?tags=story";
    return this.http.get(url).toPromise().then((response)=>{
        return response.json().hits;
    }).catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
}