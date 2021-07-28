import { Component, OnInit } from '@angular/core';
import { ArtistInformationService } from '../../services/bandsintown-api/api/artistInformation.service';
import { ArtistInfoComponent } from '../artist-info/artist-info.component';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  artistinfo: ArtistInfoComponent;

  artists: Artist[] = [
    {
      id: '1',
      name: 'Dua Lipa',
      picture: '',
      facebookurl: 'http://www.facebook.com/DuaLipa'
    },
    {
      id: '2',
      name: 'Maroon 5',
      picture: '',
      facebookurl: 'http://www.facebook.com/Maroon5'
    },
    {
      id: '3',
      name: 'Taylor Swift',
      picture: '',
      facebookurl: 'http://www.facebook.com/TaylorSwift'
    },
    {
      id: '4',
      name: 'The Strokes',
      picture: '',
      facebookurl: 'http://www.facebook.com/TheStrokes'
    }
  ];

  searchArtists: Artist[];

  constructor(private ArtistInformationService: ArtistInformationService) {}

  ngOnInit(): void {
    let artistname = 'Maroon 5';

    this.ArtistInformationService.artist(artistname, 'abc123').subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }
    );
  }

  search(value: string): void {
    this.searchArtists = this.artists.filter(val =>
      val.name.toLowerCase().includes(value)
    );
  }
}
