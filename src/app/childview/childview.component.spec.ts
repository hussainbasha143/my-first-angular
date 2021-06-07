import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviewComponent } from './childview.component';

describe('ChildviewComponent', () => {
  let component: ChildviewComponent;
  let fixture: ComponentFixture<ChildviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
