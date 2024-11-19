import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  depart_id
  depart_obj:any = {
    Expenses_for_credit : '',
    Expenses_for_mo3tamd : '',
    about_department : "",
    deptCourses : '',
    department_name : '',
    faculty_publish_year : '',
    faculty_name : "",
    specilaizationsRequirmentsList : []
  }
  faculty_image
  showBach = true
  
  constructor(private route: ActivatedRoute , private rest : FacultyService) { }

  ngOnInit(): void {
    let bach =  localStorage.getItem('facultyId')
    if(bach == '19'){
      this.showBach = false
    }else if (bach == '17'){
      this.showBach = false
    }else if (bach == '16'){
      this.showBach = false
    }else {
      this.showBach = true
    }
    
    setTimeout(() => {
      this.navBar()
    }, 1000);
    window.scrollTo(0, 0)
    this.faculty_image =  localStorage.getItem('faculty_image')
    this.depart_id = this.route.snapshot.paramMap.get('id')
    this.get_data()
  }

  get_data(){
    let branchID =  localStorage.getItem('branch_id')
    this.rest.depart_details(this.depart_id,branchID).subscribe((res:any) => {
      console.log(res)
      this.depart_obj = res
    })
  }

  navBar(){
    var scrollpos = window.scrollY;
    var nav = document.getElementsByClassName("faculty-nav")[0];
    function add_class_on_scroll() {
      nav.classList.add("top-0");
    }
    function remove_class_on_scroll() {
      nav.classList.remove("top-0");
    }
    window.addEventListener('scroll', function () {
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        add_class_on_scroll();
      }
      else {
        remove_class_on_scroll();
      }
    });
  }

}
