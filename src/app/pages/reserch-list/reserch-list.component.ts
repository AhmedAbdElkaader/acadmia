import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserch-list',
  templateUrl: './reserch-list.component.html',
  styleUrls: ['./reserch-list.component.css']
})
export class ReserchListComponent implements OnInit {

  resaerchList;
  
  constructor(private rest : RestService , private route : Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.getData()
  }

  getData(){
    this.rest.getResearch().subscribe(res => {
      console.log(res)
      this.resaerchList = res
    })
  }

  Details(item){
    this.route.navigate(['/research_details',item.ID])
  }

}
