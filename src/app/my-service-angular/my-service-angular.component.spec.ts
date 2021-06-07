import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceAngularComponent } from './my-service-angular.component';

describe('MyServiceAngularComponent', () => {
  let component: MyServiceAngularComponent;
  let fixture: ComponentFixture<MyServiceAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServiceAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
