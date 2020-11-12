import { ViewChild,Component, OnInit, ElementRef, ɵConsole } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { from, Observable } from 'rxjs';
import { of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { ImageModel } from 'src/app/Models/ImageModel';
import { ImageService } from 'src/app/Services/image.service';
import { ImageRecord } from 'src/app/Models/ImageRecord';


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
    this.listOfImages.forEach(element => this.rows.push(element, {detailRow: true, element }));
    this.dataSource= new ExampleDataSource(this.listOfImages);
    // console.log(this.rows);

  }
  xa:any;
  listOfImages:ImageRecord[];
  rows=[];
  // displayedColumns = ['position', 'name', 'dateOfUpload'];
  displayedColumns = ['position', 'name'];
  // dataSource = new ExampleDataSource();
  dataSource;
  styleOfModal:string;
  clickedElement:ImageRecord;
  errorMessage:string
  thumbnail;

isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
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

export class ExampleDataSource extends DataSource<any> {
  constructor(private records: ImageRecord[]){
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    this.records.forEach(element => rows.push(element, {detailRow: true, element }));
    return of(rows);
  }

  disconnect() { }
}


