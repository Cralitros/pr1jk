import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavegacionComponent } from './menunavegacion.component';

describe('MenunavegacionComponent', () => {
  let component: MenunavegacionComponent;
  let fixture: ComponentFixture<MenunavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenunavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenunavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
