import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigWantToReadButtonComponent } from './big-want-to-read-button.component';

describe('BigWantToReadButtonComponent', () => {
  let component: BigWantToReadButtonComponent;
  let fixture: ComponentFixture<BigWantToReadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigWantToReadButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigWantToReadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
