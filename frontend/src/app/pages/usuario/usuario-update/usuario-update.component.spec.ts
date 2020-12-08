import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsuarioUpdateComponent } from './usuario-update.component';

describe('UsuarioUpdateComponent', () => {
  let component: UsuarioUpdateComponent;
  let fixture: ComponentFixture<UsuarioUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
