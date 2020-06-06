import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationBodyComponent } from './application-body.component';

describe('ApplicationBodyComponent', () => {
  let component: ApplicationBodyComponent;
  let fixture: ComponentFixture<ApplicationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
