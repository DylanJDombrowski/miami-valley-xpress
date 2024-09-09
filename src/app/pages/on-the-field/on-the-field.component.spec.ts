import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheFieldComponent } from './on-the-field.component';

describe('OnTheFieldComponent', () => {
  let component: OnTheFieldComponent;
  let fixture: ComponentFixture<OnTheFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnTheFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnTheFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
