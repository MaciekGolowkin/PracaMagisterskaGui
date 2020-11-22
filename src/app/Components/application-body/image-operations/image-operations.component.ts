import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient ,HttpEventType} from '@angular/common/http';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserService } from 'src/app/Services/Shared/user.service';
import { ImageToUpload } from 'src/app/Interfaces/ImageToUpload';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  public response: {dbPath: ''};

  imageChangedEvent: any = '';
  croppedImage: any = '';

  image:ImageToUpload;

    UserName: string;
    public Name: string;
    public Description: string;
    public TypeOfProcessing: string;
    public Length: number;
    public Width: number;
    imgPath: string
    files:any;
    userDetails;

  constructor(private http: HttpClient,private service:UserService,private toastr: ToastrService,private router: Router) { }
  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  }
  
  public onCreate = () => {

    let fileToUpload = <File>this.files[0];
    const formData = new FormData();
    this.image = {
      Name: this.Name,
      Description: this.Description,
      TypeOfProcessing: 'Brak',
      Length: 2,
      Width: 2,
      UserName: this.userDetails.userName,
      // imgPath: this.response.dbPath
    }
    var details = JSON.stringify(this.image);
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('detailsOfImage', details);
    this.http.post('http://localhost:56741/api/upload',formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        var x= Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
      }
    });
  }
    
  fileChangeEvent(event: any, files:any): void {
      this.imageChangedEvent = event;
      this.files=files;
      console.log(files);
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;

      // console.log(this.croppedImage);
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
}
