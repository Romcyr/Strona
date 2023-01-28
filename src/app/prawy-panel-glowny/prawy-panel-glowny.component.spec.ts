import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrawyPanelGlownyComponent } from './prawy-panel-glowny.component';

describe('PrawyPanelGlownyComponent', () => {
  let component: PrawyPanelGlownyComponent;
  let fixture: ComponentFixture<PrawyPanelGlownyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrawyPanelGlownyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrawyPanelGlownyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
