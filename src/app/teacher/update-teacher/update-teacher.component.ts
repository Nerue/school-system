import { ApiFunctionsService } from 'src/app/sharedService/api-functions.service';
import { TestBed } from '@angular/core/testing';
import { TeacherService } from './../../sharedService/teacher.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
id;
  model=new Teacher
  constructor(private serv :TeacherService, private route:Router , private activeRouter : ActivatedRoute) {this.id = this.activeRouter.snapshot.paramMap.get('id')
this.serv.getTeacherByID(this.id).subscribe((data:any)=>{
  this.model=data
})}
    
  ngOnInit(): void {
  }
update(){
  this.serv.update(this.model,this.id).subscribe(data=>{
  this.route.navigateByUrl('/listT')
  })
}
}
