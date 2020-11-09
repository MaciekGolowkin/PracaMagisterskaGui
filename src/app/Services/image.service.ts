import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModel } from '../Models/ImageModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public async GetArrayOfImages(){
    return this.http.get<ImageModel[]>('http://localhost:56741/api/Images/GetImagesRegistry').toPromise();
  }
}
