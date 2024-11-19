import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news_id
  new_data:any = {
    title : "",
    DETAILS : "",
    NEW_DATE : "",
    IMG_PATH : "",
    TITLE : ""
  }
  top_readed = []
  constructor(private route: ActivatedRoute ,
    private router : Router,
     private rest : RestService ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0) 
    this.news_id = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.newsDetails(this.news_id).subscribe((res:any) => {
      console.log(res)
      this.new_data = res.new_date
      this.top_readed = res.top_readed
    })
  }

  newsDetails(item){
    this.router.navigate(['/news_details',item.ID]).then(()=>{
      location.reload()
    })
  }
  go_to_news(){
    this.router.navigateByUrl('/news_list')
  }
}
