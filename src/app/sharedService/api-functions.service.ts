import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<t> {

  constructor( @Inject(String) private Config:string ,public http:HttpClient) { }
  getTeacher():Observable<t>{
   return this.http.get<t>(this.Config)
  }
  getTeacherByID(id):Observable<t>{
    return this.http.get<t>(this.Config+`/${id}`)
  }
  post(model):Observable<t>{
    return this.http.post<t>(this.Config ,model)
  }
  update(model,id):Observable<t>{
    return this.http.put<t>(this.Config+`/${id}` ,model )
  }
  delete(id):Observable<t>{
    return this.http.delete<t>(this.Config+`/${id}`)
  }
}
