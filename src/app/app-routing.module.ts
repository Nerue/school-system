import { StudentProfileComponent } from './student-profile/student-profile.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {path:"home",component:HomeComponent} ,
 {path:"",component:HomeComponent} ,
 {path:"listT",component:ListTeacherComponent},
 {path:"addT",component:AddTeacherComponent},
 {path:"upT/:id",component:UpdateTeacherComponent}, 
 {path:"listS",component:ListStudentComponent},
 {path:"addS",component:AddStudentComponent},
 {path:"upS/:id",component:UpdateStudentComponent}
 , {path:"pS/:id",component:StudentProfileComponent}
 ,
 {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
