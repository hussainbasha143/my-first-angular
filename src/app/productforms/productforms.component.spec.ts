import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductformsComponent } from './productforms.component';

describe('ProductformsComponent', () => {
  let component: ProductformsComponent;
  let fixture: ComponentFixture<ProductformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
