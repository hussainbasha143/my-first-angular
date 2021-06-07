import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceFullDetailsAngularComponent } from './my-service-full-details-angular.component';

describe('MyServiceFullDetailsAngularComponent', () => {
  let component: MyServiceFullDetailsAngularComponent;
  let fixture: ComponentFixture<MyServiceFullDetailsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServiceFullDetailsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceFullDetailsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
