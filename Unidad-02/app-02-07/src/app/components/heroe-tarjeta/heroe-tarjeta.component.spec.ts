import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjetaComponent } from './heroe-tarjeta.component';

describe('HeroeTarjetaComponent', () => {
  let component: HeroeTarjetaComponent;
  let fixture: ComponentFixture<HeroeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
