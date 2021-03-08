import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
 
  private _url:string="http://localhost:3000/api/events";
  private _url1:string="http://localhost:3000/api/6f28b2eb-56a4-495a-86b6-9925944b7bd4";
  private _url2:string="http://localhost:3000/api/attendence";
  private _delete:string="http://localhost:3000/api/delete";

  constructor(private http:HttpClient) { }

  get()
   {
    return this.http.get<any>(this._url);
    
   }
   get2(value)
   {
     console.log("service",value);
      
    //return this.http.get<any>(this._url1,value);
     //return this.http.delete<any>(this._url1+"/"+value);
     return this.http.get(this._url1+"/"+value);
   }
}
