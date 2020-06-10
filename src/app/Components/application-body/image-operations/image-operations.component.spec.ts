import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOperationsComponent } from './image-operations.component';

describe('ImageOperationsComponent', () => {
  let component: ImageOperationsComponent;
  let fixture: ComponentFixture<ImageOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
