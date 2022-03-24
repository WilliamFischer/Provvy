import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist-creation-center',
  templateUrl: './artist-creation-center.component.html',
  styleUrls: ['./artist-creation-center.component.scss']
})
export class ArtistCreationCenterComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

  }

}
