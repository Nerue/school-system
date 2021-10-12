
import { TeacherService } from './../../sharedService/teacher.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

model=new Teacher;

  constructor(private serv :TeacherService, private route:Router) {}
  
  ngOnInit(): void {
    
  }
save(){
  this.serv.post(this.model).subscribe(data=>{
    this.route.navigateByUrl('listT')
  })
}
}
