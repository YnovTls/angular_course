import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPageComponent } from './old-page.component';

describe('OldPageComponent', () => {
  let component: OldPageComponent;
  let fixture: ComponentFixture<OldPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
