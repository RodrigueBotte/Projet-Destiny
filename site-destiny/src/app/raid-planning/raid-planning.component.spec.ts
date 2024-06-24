import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidPlanningComponent } from './raid-planning.component';

describe('RaidPlanningComponent', () => {
  let component: RaidPlanningComponent;
  let fixture: ComponentFixture<RaidPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaidPlanningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
