import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit {

  artist: Artist;

  constructor() {
    this.artist = new Artist;
    this.artist._id = '1';
    this.artist.name = "The Strokes";
    this.artist.facebookurl = "http://www.facebook.com/"
    this.artist.picture = "image";
  }

  ngOnInit(): void {
  }

}
