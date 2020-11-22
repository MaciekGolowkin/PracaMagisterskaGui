import { ViewChild,Component, OnInit, ElementRef, ɵConsole } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ImageService } from 'src/app/Services/image.service';
import { ImageRecord } from 'src/app/Models/ImageRecord';
import { MatDataSource } from 'src/app/Models/MatDataSource';


@Component({
  selector: 'app-rows-result',
  templateUrl: './rows-result.component.html',
  styleUrls: ['./rows-result.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class RowsResultComponent implements OnInit {
  constructor(private http: HttpClient,private imageService: ImageService) { }

  async ngOnInit() {
    this.listOfImages= await this.imageService.GetArrayOfImages();
    console.log(this.listOfImages);
    this.dataSource= new MatDataSource(this.listOfImages);
  }
  listOfImages:ImageRecord[];
  displayedColumns = ['position', 'name'];
  dataSource;
  styleOfModal:string;
  clickedElement:ImageRecord;
  errorMessage:string

isExpansionDetailRow = (i: number, row: ImageRecord) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  test() {
    console.log('test');
  }

  imageOnClick(){
    this.styleOfModal="block";
  }

  spanExitClick(){
    this.styleOfModal="none";
  }

  cellClicked(element:ImageRecord) {
    console.log(element)
    this.clickedElement =  this.listOfImages.find(x => x.position == element.position);
  }

  deleteElement(id:number) {
    this.listOfImages.splice(id, 1);
  }
}

export interface ImageRecordTest {
  title: string;
  position: number;
  dateOfUpload?:Date;
  description?:string;
}



