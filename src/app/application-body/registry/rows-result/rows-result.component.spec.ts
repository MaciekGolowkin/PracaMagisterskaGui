import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsResultComponent } from './rows-result.component';

describe('RowsResultComponent', () => {
  let component: RowsResultComponent;
  let fixture: ComponentFixture<RowsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
