import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTeamComponent } from './extended-team.component';

describe('ExtendedTeamComponent', () => {
  let component: ExtendedTeamComponent;
  let fixture: ComponentFixture<ExtendedTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
