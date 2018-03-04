import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employeeList : Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
      var emp = this.employeeService.getData();
      emp.snapshotChanges().subscribe(item=>{
          this.employeeList = [];
          item.forEach(element => {
              var e = element.payload.toJSON();
              e["$key"] = element.key;
              this.employeeList.push(e as Employee);
          })

      })
  }

}
