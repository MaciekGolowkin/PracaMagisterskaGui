import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryteriaComponent } from './cryteria.component';

describe('CryteriaComponent', () => {
  let component: CryteriaComponent;
  let fixture: ComponentFixture<CryteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
