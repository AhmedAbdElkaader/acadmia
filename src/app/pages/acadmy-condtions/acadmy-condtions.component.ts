import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-acadmy-condtions',
  templateUrl: './acadmy-condtions.component.html',
  styleUrls: ['./acadmy-condtions.component.css']
})
export class AcadmyCondtionsComponent implements OnInit {
  list_condtion
  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.rest.GetConditionsAndTerms().subscribe(res => {
      console.log(res)
      this.list_condtion = res
    })
  }

}
