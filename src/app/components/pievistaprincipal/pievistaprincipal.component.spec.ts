import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PievistaprincipalComponent } from './pievistaprincipal.component';

describe('PievistaprincipalComponent', () => {
  let component: PievistaprincipalComponent;
  let fixture: ComponentFixture<PievistaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PievistaprincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PievistaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
