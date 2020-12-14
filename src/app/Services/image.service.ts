import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModel } from '../Models/ImageModel';
import { ImageRecord } from '../Models/ImageRecord';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public async GetArrayOfImages(){
    var listOfImages= this.http.get<ImageRecord[]>('http://localhost:56741/api/Images/GetImagesRegistry').toPromise();
    (await listOfImages).map(x=>x.imgPath="http://localhost:56741/"+x.imgPath);
    (await listOfImages).map(x=>x.processedImgPath="http://localhost:56741/"+x.processedImgPath);
    (await listOfImages).forEach((item, i) => {item.position = i + 1;});
    return listOfImages;
  }
}
