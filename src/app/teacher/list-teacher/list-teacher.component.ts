
import { TeacherService } from './../../sharedService/teacher.service';
import { Teacher } from './../../models/teacher';

import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
 allData=[]
 model=new Teacher
  constructor(private serv : TeacherService) {
    this.serv.getTeacher().subscribe(
      (data:any)=>  {this.allData=data;}
    )
   }
remove(id){
  this.serv.delete(id).subscribe(data=>{
    window.location.reload()
  })
}
  ngOnInit(): void {
  }

}
