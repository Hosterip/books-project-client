import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWantToReadButtonComponent } from './small-want-to-read-button.component';

describe('SmallWantToReadButtonComponent', () => {
  let component: SmallWantToReadButtonComponent;
  let fixture: ComponentFixture<SmallWantToReadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallWantToReadButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallWantToReadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
