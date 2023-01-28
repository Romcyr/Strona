import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrawyPanelComponent } from './prawy-panel.component';

describe('PrawyPanelComponent', () => {
  let component: PrawyPanelComponent;
  let fixture: ComponentFixture<PrawyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrawyPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrawyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
