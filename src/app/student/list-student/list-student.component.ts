import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/sharedService/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  allData=[]
  model=new Student
   constructor(private serv : StudentService) {
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
