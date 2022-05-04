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
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-artist-creation-center',
  templateUrl: './artist-creation-center.component.html',
  styleUrls: ['./artist-creation-center.component.scss']
})
export class ArtistCreationCenterComponent implements OnInit {

  path: string = '';
  step: number = 0;

  user: any = {
    image: '',
    name: '',
    description: '',
    socials: {
      twitter: '',
      facebook: '',
      instagram: '',
    }
  };

  constructor(
    public router: Router,
    private storage: Storage,
    public route: ActivatedRoute,
    public walletService: WalletService
  ) { }

  ngOnInit(): void { }

  async submitPhoto(event: any) {
    console.log('UPLOADING IMAGE....');

    this.path = '';
    this.user.image = '';
    let file = event.target.files[0];

    if (file) {
      this.path = 'artsits_profiles/' + (Math.random() + 1).toString(36).substring(7);

      try {
        const storageRef = ref(this.storage, this.path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);

        if (url) {
          this.user.image = url;
        }
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

  goToSocials() {
    this.step = 1;
  }

  async connectToMetaMask() {
    await this.walletService.connectAccount().then((d) => {
      console.log(d)
    })
  }

  createAccount() {
    this.user.image = 'assets/no-profile-image.png';
  }


}
