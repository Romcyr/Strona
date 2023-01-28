import { Injectable } from '@angular/core';
import {StudentModel} from "../model/StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
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
    this.studentList.push(nowyStudent)

  }
}
