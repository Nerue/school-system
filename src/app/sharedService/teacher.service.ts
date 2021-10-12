
import { ApiFunctionsService } from './api-functions.service';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApiFunctionsService<Teacher>{

  constructor(public http:HttpClient) {
    super('http://localhost:3000/teacher',http)
   
   }
}
