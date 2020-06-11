import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';


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

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['position', 'title', 'dateOfUpload'];
  dataSource = new ExampleDataSource();

  clickedElement:ImageRecord={position: 1, title: 'Zdjecie 1', dateOfUpload: new Date("2019-01-16")};

isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  test() {
    console.log('test');
  }

  cellClicked(element:ImageRecord) {
    this.clickedElement =  ELEMENT_DATA.find(x => x.position == element.position);
    console.log(this.clickedElement);
  }

}

export interface ImageRecord {
  title: string;
  position: number;
  dateOfUpload:Date;
  description?:string;
}

  

const ELEMENT_DATA: ImageRecord[] = [
  {position: 1, title: 'Zdjecie 1', dateOfUpload: new Date("2019-01-16"),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
  {position: 2, title: 'Zdjecie 2', dateOfUpload: new Date("2019-01-17"),description:"Opissssssssss,"},
  {position: 3, title: 'Zdjecie aaa', dateOfUpload: new Date("2019-01-18"),description:"Halo halo"},
  {position: 4, title: 'Zdjecie Medyczne', dateOfUpload: new Date("2019-01-19"),description:"Loreaasdsdadmmy text of the assadas industry's standard dummy text ever since the 1500s,"},
  {position: 5, title: 'Zdjecie Medyczne Bardzo', dateOfUpload: new Date("2019-01-20")},
  {position: 6, title: 'Zdjecie obrazo', dateOfUpload: new Date("2019-01-21")},
  {position: 7, title: 'ziarniaki', dateOfUpload: new Date("2019-01-21")},
  {position: 8, title: 'Diplococcus', dateOfUpload: new Date("2019-01-22")},
  {position: 9, title: 'Tetracoccus', dateOfUpload: new Date("2019-01-23")},
  {position: 10, title: 'Streptococcus', dateOfUpload: new Date("2019-01-24")},
  {position: 11, title: 'Staphylococcus', dateOfUpload: new Date("2019-01-25")},
  {position: 12, title: 'Sarcina', dateOfUpload: new Date("2019-08-18")},
  {position: 13, title: 'Bacterium', dateOfUpload: new Date("2019-07-18")},
  {position: 14, title: 'Silicon', dateOfUpload: new Date("2019-06-18")},
  {position: 15, title: 'Bacillus', dateOfUpload: new Date("2019-05-18")},
  {position: 16, title: 'Corynebacterium', dateOfUpload: new Date("2019-04-18")},
  {position: 17, title: 'Vibrio', dateOfUpload: new Date("2019-03-18")},
  {position: 18, title: 'Spirillum', dateOfUpload: new Date("2019-02-18")},
  {position: 19, title: 'Spirochaeta',dateOfUpload: new Date("2019-07-18")},
  {position: 20, title: 'Actinomyces',dateOfUpload: new Date("2019-07-19")},
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    ELEMENT_DATA.forEach(element => rows.push(element, {detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}


