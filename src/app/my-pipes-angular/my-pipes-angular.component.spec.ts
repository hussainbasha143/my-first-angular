import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipesAngularComponent } from './my-pipes-angular.component';

describe('MyPipesAngularComponent', () => {
  let component: MyPipesAngularComponent;
  let fixture: ComponentFixture<MyPipesAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPipesAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
