import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {Directory, Encoding, Filesystem} from '@capacitor/filesystem';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }

 async takePhoto()
  {
    const image = await Camera.getPhoto({
      quality: 40,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    if(image){
    this.savePhoto(image.base64String!);
    }
  }
  
    async savePhoto(photo: string)
    {
await Filesystem.writeFile({
  path: 'Test3.jpg',
  data: photo,
  directory: Directory.Documents,
});
    }

  
};


