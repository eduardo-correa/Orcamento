import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UgListComponent } from './ug-list.component';

describe('UgListComponent', () => {
  let component: UgListComponent;
  let fixture: ComponentFixture<UgListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
