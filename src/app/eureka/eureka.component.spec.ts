import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurekaComponent } from './eureka.component';

describe('EurekaComponent', () => {
  let component: EurekaComponent;
  let fixture: ComponentFixture<EurekaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EurekaComponent]
    });
    fixture = TestBed.createComponent(EurekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
