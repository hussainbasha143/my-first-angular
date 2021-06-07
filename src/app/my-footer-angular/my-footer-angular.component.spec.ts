import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFooterAngularComponent } from './my-footer-angular.component';

describe('MyFooterAngularComponent', () => {
  let component: MyFooterAngularComponent;
  let fixture: ComponentFixture<MyFooterAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFooterAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFooterAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
