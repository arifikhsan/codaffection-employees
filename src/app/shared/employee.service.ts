import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firebase: AngularFireDatabase) {}

  employeeList: AngularFireList<any>;
  // employeeList: [any];

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
    // return this.employeeList;
  }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
  }

  updateEmployee(employee) {
    // const index = this.employeeList.indexOf(employee.$key);
    // tslint:disable-next-line: no-bitwise
    // if (~index) {
    //   this.employeeList[index] = {
    //     fullName: employee.fullName,
    //     email: employee.email,
    //     mobile: employee.mobile,
    //     city: employee.city,
    //     gender: employee.gender,
    //     department: employee.department,
    //     hireDate: employee.hireDate,
    //     isPermanent: employee.isPermanent
    //   };
    this.employeeList.update(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
    // }
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
    // const index = this.employeeList.indexOf($key);
    // tslint:disable-next-line: no-bitwise
    // if (~index) {
    //   this.employeeList.splice(index, 1);
    // }
  }

  populateForm(employee) {
    this.form.setValue(_.omit(employee, 'departmentName'));
  }
}
