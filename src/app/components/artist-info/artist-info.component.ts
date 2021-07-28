import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit {
  @Input() name: String;
  @Input() fburl: String;

  constructor() {}

  ngOnInit(): void {}
}
