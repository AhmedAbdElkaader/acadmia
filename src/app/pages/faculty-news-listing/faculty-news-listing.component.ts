import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-faculty-news-listing',
  templateUrl: './faculty-news-listing.component.html',
  styleUrls: ['./faculty-news-listing.component.css']
})
export class FacultyNewsListingComponent implements OnInit {
  faculty_id
  news_arr 
  facultName = ''
  constructor(private route : ActivatedRoute , private faculty_serv:FacultyService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.faculty_id = this.route.snapshot.paramMap.get('id')
    this.get_data()
  }

  get_data(){
    this.faculty_serv.facultyNews(this.faculty_id).subscribe((res:any) => {
      console.log(res)
      this.news_arr = res.LatestNews
      this.facultName = res.faculty_name
    })
  }

}
