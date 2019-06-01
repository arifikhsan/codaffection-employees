import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  public departments = [
    { id: 1, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }
  ];

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  onClear() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }

  onSubmit() {
    if (this.employeeService.form.valid) {
      this.employeeService.insertEmployee(this.employeeService.form.value);
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
    }
  }
}
