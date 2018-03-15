import { AppApi } from './app.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppApi]
})
export class AppComponent implements OnInit {
  query:string='';
  title = 'app';
  public json;
  public myClass:string='fa fa-arrow-down';
  public target=null;  
  public fetchedData:Object;
  constructor(private app:AppApi){
    
  }

  private showData=(list):any=>{
    console.log(list);
    this.json = list.json;
  }

  public filter=():any=>{
    if(this.target == null){
      this.target = true;
    }
    else{
      this.target = !this.target;
    }
    if(this.myClass=='fa fa-arrow-down'){
      this.myClass = 'fa fa-arrow-up';
    }else if(this.myClass == 'fa fa-arrow-up'){
      this.myClass = 'fa fa-arrow-down';
    }
    
  }

  private getData():any{
    this.app.fetchData().then(data=>{
       for(let i=0;i<data.length;i++){
         data[i].json= JSON.stringify(data[i]);
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
