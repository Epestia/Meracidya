import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BozjaComponent } from './bozja.component';

describe('BozjaComponent', () => {
  let component: BozjaComponent;
  let fixture: ComponentFixture<BozjaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BozjaComponent]
    });
    fixture = TestBed.createComponent(BozjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
