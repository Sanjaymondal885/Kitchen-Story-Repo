import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteditemComponent } from './selecteditem.component';

describe('SelecteditemComponent', () => {
  let component: SelecteditemComponent;
  let fixture: ComponentFixture<SelecteditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
