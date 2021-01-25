import { Component, OnInit } from '@angular/core';
import { IDepartment, IDepartmentAPI } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private departmentService : DepartmentService) { }
  departmentAPI: IDepartmentAPI = {
    errcode: 1,
    errmsg: '',
    department: [{
      id: 1,
      name: '',
      name_en: '',
      parentid: 2,
      order: 1
    }]
  };
  departments: IDepartment[] = this.departmentAPI.department
  // departmentAPI : any
  // departments: any
  ngOnInit(): void {
    this.getDepartmentAll();
  }

  getDepartmentAll(): void {
    this.departmentService.getDepartmentAll()
      .subscribe(allDepartment => { this.departmentAPI = allDepartment;
        this.departments = allDepartment.department;
        console.log(this.departments)});
  }

}
