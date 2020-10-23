import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public mArticles: Array<any>;
  constructor(public mySerive: MyServiceService) {
  }


  ngOnInit() {
    this.mySerive.topStories().subscribe((data: any) => {
      this.mArticles = data;
    });
  }

  public getByYear(year) {
    this.mySerive.getByYear(year).subscribe((data: any) => {
      this.mArticles = data;
    });
  }

  public getByLaunch(flag) {
    this.mySerive.getByLaunch(flag).subscribe((data: any) => {
      this.mArticles = data;
    });
  }

  public getByLanding(flag) {
    this.mySerive.getByLanding(flag).subscribe((data: any) => {
      this.mArticles = data;
    });
  }
}
