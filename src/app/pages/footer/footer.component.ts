import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faucltyArr
  alex_branch
  main_branch
  branches
  youtube : ""
  facebook : ""
  tiwtter : ""
  bank : ""
  instgram : ""
  modelLink : ""
  CENTERLIBGATE_LINK : ''
  list_condtion: any;
  buildingArr: any;
  constructor(private rest: RestService , private route : Router) { }

  ngOnInit(): void {

    this.rest.GetBranchesFaculties().subscribe((res: any) => {
      this.buildingArr = res.academy_constructions
      this.branches = res.branches
      this.instgram = res.INSTAGRAME
      this.facebook = res.FACRBOOK
      this.tiwtter = res.TWITTER
      this.youtube = res.YOUTUBE
      this.bank = res.INFO_BANK
      this.modelLink = res.MOODLE_LINK
      this.CENTERLIBGATE_LINK = res.CENTERLIBGATE_LINK
      for (let i = 0; i < this.branches.length; i++) {
        for (let j = 0; j < this.branches[i].faculty.length; j++) {
          this.branches[i].faculty[j].branch_id = this.branches[i].branch_id
        }
      }
      this.alex_branch = this.branches[1].faculty
      this.main_branch = this.branches[0].faculty
    })

    this.rest.homePage().subscribe((res: any) => {
      this.faucltyArr = res.faculty

    })
  }

  gotToFaculty(item){

    localStorage.setItem('FACULTY_NAME', item.FACULTY_NAME)
    localStorage.setItem("facultyId",item.ID)
    localStorage.setItem("DATE_ESTABLISH",item.DATE_ESTABLISH)
    localStorage.setItem("faculty_image",item.SLIDER_IMAGE)
    this.route.navigate(['/faculty',item.ID])
  }

  gotToConstrction(item){
    this.route.navigate(['/constrction', item.ID]).then(() => {
      location.reload()
    })
  }

}
