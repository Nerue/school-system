import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../sharedService/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  allData:Student
  id
  constructor(private serv:StudentService , private route : ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get("id")
    this.serv.getTeacherByID(this.id).subscribe((data:any)=>{
       this.allData=data
      
      
    })
   
    
   }

  ngOnInit(): void {
  }

}
