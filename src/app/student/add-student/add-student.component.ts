import { StudentService } from './../../sharedService/student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  model=new Student;

  constructor(private serv :StudentService, private route:Router) {}
 
  
save(){
  this.serv.post(this.model).subscribe(data=>{
    this.route.navigateByUrl('listS')
    console.log(this.model);
    
  })
}

  

  ngOnInit(): void {
  }

}
