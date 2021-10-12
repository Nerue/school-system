import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/home/home.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    StudentProfileComponent,
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
