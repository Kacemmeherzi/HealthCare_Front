import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvlistComponent } from './rvlist.component';

describe('RvlistComponent', () => {
  let component: RvlistComponent;
  let fixture: ComponentFixture<RvlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
