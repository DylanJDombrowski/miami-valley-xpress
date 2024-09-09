import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpressSocialComponent } from './xpress-social.component';

describe('XpressSocialComponent', () => {
  let component: XpressSocialComponent;
  let fixture: ComponentFixture<XpressSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XpressSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpressSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
