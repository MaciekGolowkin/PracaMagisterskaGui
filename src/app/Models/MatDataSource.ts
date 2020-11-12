import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { ImageRecord } from './ImageRecord';

export class MatDataSource extends DataSource<any> {
    constructor(private records: ImageRecord[]){
      super();
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<ImageRecord[]> {
      const rows = [];
      this.records.forEach(element => rows.push(element, {detailRow: true, element }));
      console.log(rows)
      return of(rows);
    }
    disconnect() { }
  }