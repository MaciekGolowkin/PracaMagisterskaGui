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

 

  public uploadFinished=(event)=>{
    this.response = event;
  }

  public onCreate = () => {
    this.image = {
      Name: this.Name,
      Description: this.Description,
      TypeOfProcessing: 'Brak',
      Length: 2,
      Width: 2,
      UserName: this.userDetails.userName,
      imgPath: this.response.dbPath
    }
    this.http.post('http://localhost:56741/api/upload/AddImage', this.image)
    .subscribe(res => {
    //   this.getUsers();
    this.toastr.error('Pomyślnie dodano obraz');
    this.router.navigateByUrl('/home');
    });
  }
    



  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;

      console.log(this.croppedImage);
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
