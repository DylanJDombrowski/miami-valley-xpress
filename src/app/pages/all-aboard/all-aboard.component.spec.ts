import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAboardComponent } from './all-aboard.component';

describe('AllAboardComponent', () => {
  let component: AllAboardComponent;
  let fixture: ComponentFixture<AllAboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
