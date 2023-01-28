import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LewyGuzikComponent } from './lewy-guzik.component';

describe('LewyGuzikComponent', () => {
  let component: LewyGuzikComponent;
  let fixture: ComponentFixture<LewyGuzikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LewyGuzikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LewyGuzikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
