import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoversProgressSpinnersComponent } from './popovers-progress-spinners.component';

describe('PopoversProgressSpinnersComponent', () => {
  let component: PopoversProgressSpinnersComponent;
  let fixture: ComponentFixture<PopoversProgressSpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoversProgressSpinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoversProgressSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
