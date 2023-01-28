import { Component } from '@angular/core';
import {StudentService} from "../student-service/student.service";
// export ==> public
// type studentmodel ==> class StudentModel {}



@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrls: ['./page-student-list.component.css']
})
export class PageStudentListComponent {


  constructor(protected studentService : StudentService) {
  }
  usunStudenta(id: number):void{
    console.log("Usuwam studenta o id: " + id)
    this.studentService.usunStudentaWSerwisie(id)

  }

}
