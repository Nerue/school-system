import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/sharedService/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id;
  model=new Student
  constructor(private serv :StudentService, private route:Router , private activeRouter : ActivatedRoute) {this.id = this.activeRouter.snapshot.paramMap.get('id')
this.serv.getTeacherByID(this.id).subscribe((data:any)=>{
  this.model=data
})}
    
  ngOnInit(): void {
  }
update(){
  this.serv.update(this.model,this.id).subscribe(data=>{
  this.route.navigateByUrl('/listS')
  })
}
}
