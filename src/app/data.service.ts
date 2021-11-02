import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url : string = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21&format=json&nojsoncallback=1&page=`
  constructor(private http:HttpClient) { }
  getAllPictures(page : number): Observable<any> {
    return this.http.get<Observable<any>>(this.url + page)
    
  }

}
