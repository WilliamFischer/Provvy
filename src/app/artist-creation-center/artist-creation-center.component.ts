import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

import {
  Storage,
  ref,
  deleteObject,
  uploadBytesResumable,
  percentage,
  UploadTaskSnapshot,
  getDownloadURL
} from '@angular/fire/storage';

@Component({
  selector: 'app-artist-creation-center',
  templateUrl: './artist-creation-center.component.html',
  styleUrls: ['./artist-creation-center.component.scss']
})
export class ArtistCreationCenterComponent implements OnInit {

  path: string = '';

  uploadPercent: Observable<{
    progress: number;
    snapshot: UploadTaskSnapshot;
  }>;

  user: any = [];

  constructor(
    public router: Router,
    private storage: Storage,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

  }

  async submitPhoto(event: any) {
    console.log('UPLOADING IMAGE....');

    this.path = '';
    this.user.image = '';
    let file = event.target.files[0];

    if (file) {
      this.path = (Math.random() + 1).toString(36).substring(7);

      try {
        const storageRef = ref(this.storage, this.path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        this.user.image = url;
      } catch (e: any) { alert(e); }
    } else {
      alert('Invalid file.')
    }

  }

  deleteImage() {
    const desertRef = ref(this.storage, this.path);

    deleteObject(desertRef).then(() => {
      this.user.image = '';
    }).catch((error) => {
      alert(error)
    });
  }

  submitF(){
    alert('This will take you to the next steps. ie. connecting wallet')
  }

}
