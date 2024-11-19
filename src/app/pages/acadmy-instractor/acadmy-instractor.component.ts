import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-acadmy-instractor',
  templateUrl: './acadmy-instractor.component.html',
  styleUrls: ['./acadmy-instractor.component.css']
})
export class AcadmyInstractorComponent implements OnInit {
  facultyMainTech: any[] = []
  facultyTechGroup
  techDetails: any = {}
  constructor(private facultyService: FacultyService, ) { }

  ngOnInit(): void {

    this.facultyService.GetAllTeachingMembers().subscribe((res: any) => {
      console.log("instractors", res)
      this.facultyTechGroup = res.teachingmembersGroup
      this.facultyMainTech.push(res.academyPresident)
      this.facultyMainTech.push(res.academyVicePresident)
      res.facultyDeans.forEach(element => {
        this.facultyMainTech.push(element)
      });
    })
  }


  techData(id) {
    this.facultyService.getTechDteails(id).subscribe(res => {
      console.log(res)
      this.techDetails = res
    })
  }
  scroolDowen(elemnt_id) {
    document.getElementById(elemnt_id).scrollIntoView()
  }

}
