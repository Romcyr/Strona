import { Injectable } from '@angular/core';
import {StudentModel} from "../model/StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  nextStudentId: number = 1
  studentList: StudentModel[] = []

  constructor() {
    // push = add()
    // this.studentList.push({
    //   id: 1,
    //   imie: 'roman',
    //   nazwisko: 'cyro',
    //   dataUrodzenia: '2021-10-12'
    // })
  }
  // nazwa metody =>dodajStudenta
  // nowyStudent => nazwa parametru
  // :StudentModel => typ parametru
  // :void => typ zwracany
  dodajStudenta (nowyStudent: StudentModel): void{
    nowyStudent.id = this.nextStudentId++
    this.studentList.push(nowyStudent)
  }
  usunStudentaWSerwisie(id: number) : void{
    let znalezionyStudent;
    for (const student of this.studentList) {
      if (student.id == id){
        znalezionyStudent = student;
        break;
      }
    }
    if (znalezionyStudent == undefined){
      return
    }

    const index = this.studentList.indexOf(znalezionyStudent,0)
    this.studentList.splice(index,1)// usuniecie 1 elementu na pozycji index
  }
}
