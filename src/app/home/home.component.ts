import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Photos: any = [];
  numberPage = 1;
  picUrl = "";
  newUrl = "";
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllPictures(this.numberPage).subscribe(pic => {
      this.Photos = pic.photos.photo;
      console.log(this.Photos)
    });

    window.onscroll = (event) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const next = () => {
          this.data.getAllPictures(++this.numberPage).subscribe(pic => {
            var newPhoto = pic.photos.photo;
            console.log(pic.photos);
            var p2 = this.Photos;
            this.Photos = [...this.Photos, ...newPhoto]
            console.log(this.Photos)
          });
        }
        next();
      }

    };

  }

  imgClick(picUrl: any) {
    var splitted = picUrl.split("_m.jpg");
    this.newUrl = splitted[0].concat('_b.jpg')
  }

}
