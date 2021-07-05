import { Component, OnInit } from '@angular/core';
import { ArtistInformationService } from '../../services/bandsintown-api/api/artistInformation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private ArtistInformationService: ArtistInformationService) { }

  ngOnInit(): void {
    let artistname = "Maroon 5";

    this.ArtistInformationService.artist(artistname, "abc123").subscribe(data => {
      this.data = data;
      console.log(this.data);
    });

  }

}
