import { Component, OnInit } from '@angular/core';
import { RestService } from './service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'acadmia';
  faucltyArr: any
  list_condtion
  branches: any
  alex_branch
  main_branch
  buildingArr: any
  constructor(private rest: RestService, private route: Router) { }

  ngOnInit() {
    this.homeapi()
    this.getBranches()
  }

  getBranches() {
    this.rest.GetBranchesFaculties().subscribe((res: any) => {
      console.log(res, "asds")
      const index1 = 0;
      const index2 = 5;
      this.buildingArr = res.academy_constructions
      const temp = this.buildingArr[index1];
      this.buildingArr [index1] = this.buildingArr[index2];
      this.buildingArr [index2] = temp;

      this.branches = res.branches
      for (let i = 0; i < this.branches.length; i++) {
        for (let j = 0; j < this.branches[i].faculty.length; j++) {
          this.branches[i].faculty[j].branch_id = this.branches[i].branch_id
        }
      }
      this.alex_branch = this.branches[1].faculty
      this.main_branch = this.branches[0].faculty
    })
  }

  homeapi() {
    this.rest.homePage().subscribe((res: any) => {
      this.faucltyArr = res.faculty

    })
    this.rest.GetConditionsAndTerms().subscribe(res => {
      this.list_condtion = res
    })
  }

  gotToFaculty(item) {

    localStorage.setItem('FACULTY_NAME', item.FACULTY_NAME)
    localStorage.setItem("facultyId", item.ID)
    localStorage.setItem("DATE_ESTABLISH", item.DATE_ESTABLISH)
    localStorage.setItem("faculty_image", item.SLIDER_IMAGE)
    localStorage.setItem('branch_id', item.branch_id)
    this.route.navigate(['/faculty', item.ID]).then(() => {
      location.reload()
    })
  }
  gotToConstrction(item) {
    this.route.navigate(['/constrction', item.ID]).then(() => {
      location.reload()
    })
  }

  faculty_id = ''
  branch_status = false
  selectOption(event) {
    this.branch_status = true
    if (event.target.value == '1') {
      this.faucltyArr = this.main_branch
    } else {
      this.faucltyArr = this.alex_branch
    }

  }
  selectOptionFaculty(event) {
    this.faculty_id = event.target.value
  }

  go_faculty() {
    if (this.faculty_id) {
      this.route.navigate(['/register', this.faculty_id]).then(() => {
        location.reload()
      })
    }

  }




}
