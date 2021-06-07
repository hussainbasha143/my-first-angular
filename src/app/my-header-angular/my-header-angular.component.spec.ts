import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeaderAngularComponent } from './my-header-angular.component';

describe('MyHeaderAngularComponent', () => {
  let component: MyHeaderAngularComponent;
  let fixture: ComponentFixture<MyHeaderAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHeaderAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeaderAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
