import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-operations',
  templateUrl: './image-operations.component.html',
  styleUrls: ['./image-operations.component.css']
})
export class ImageOperationsComponent implements OnInit {

  isDone:boolean=false;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private http: HttpClient) { }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  ngOnInit(): void {
  }
}
