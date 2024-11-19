import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/service/faculty.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  facultyId;
  FACULTY_NAME
  departments = []
  faculty_logo
  HAS_CREDIT
  branchId
  IS_REGISTRATION_OPEN = false
  constructor(private rest : FacultyService ,
    private restApi: RestService ,
     private router : Router) { }

  ngOnInit(): void {
  this.facultyId = localStorage.getItem('facultyId')
  this.FACULTY_NAME =  localStorage.getItem('FACULTY_NAME')
  this.branchId = localStorage.getItem('branch_id')
  this.getData()
  this.getDepart()
  this.getBranch()
  }

  getBranch() {
    this.restApi.getbranch().subscribe((res: any) => {
      this.IS_REGISTRATION_OPEN = res.IS_REGISTRATION_OPEN
    })
  }

  getDepart(){
    this.rest.faculty_department(this.facultyId,this.branchId).subscribe((res :any) => {
      console.log("res ",res)
      this.departments = res.departments
    })
  }

  getData(){
    let branch_id = localStorage.getItem('branch_id')
    if(branch_id){

    }else {
      branch_id = '5'
    }
    this.rest.facultyHome(this.facultyId,branch_id).subscribe((res :any) => {
      console.log("res header",res)
      
      this.faculty_logo = res.FACULTY_LOGO
      this.HAS_CREDIT = res.HAS_CREDIT
    })
  }

  goto_depart(item){
    this.router.navigate(['/department',item.ID]).then(() => {
      location.reload()
    })
  }

  faculty_fees(elemnt){
    this.router.navigate(['/Education_system',this.facultyId])
    localStorage.setItem("elemnt",elemnt)
  }
}
