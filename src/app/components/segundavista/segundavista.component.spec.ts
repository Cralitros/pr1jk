import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundavistaComponent } from './segundavista.component';

describe('SegundavistaComponent', () => {
  let component: SegundavistaComponent;
  let fixture: ComponentFixture<SegundavistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundavistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundavistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
