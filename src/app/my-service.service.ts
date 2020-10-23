import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  // API end point for the first-time page load without any Filters:
  public topStories() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  public getByYear(year) {
    console.log('year', year)
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_year=' + year);
  }

  public getByLaunch(flag) {
    console.log('flag', flag)
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + flag);
  }

  public getByLanding(flag) {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success=' + flag);
  }

}
