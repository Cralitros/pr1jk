import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonoComponent } from './hexagono.component';

describe('HexagonoComponent', () => {
  let component: HexagonoComponent;
  let fixture: ComponentFixture<HexagonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexagonoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexagonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
