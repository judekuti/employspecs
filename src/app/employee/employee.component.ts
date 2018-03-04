import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
      this.resetForm();
      this.employeeService.getData();
  }
onSubmit(employeeForm: NgForm){
    this.employeeService.insertEmployee(employeeForm.value)
    this.resetForm(employeeForm);
    this.toastr.success('Submitted Successfully', 'Employee Registered')

}
resetForm(employeeForm? : NgForm){
    if (employeeForm != null)
    employeeForm.reset();
    this.employeeService.selectedEmployee = {
        $key: null,
        name: '',
        position: '',
        office: '',
        salary: 0
    }

}
}
