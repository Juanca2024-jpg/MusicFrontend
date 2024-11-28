import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarListasComponent } from './mostrar-listas.component';

describe('MostrarListasComponent', () => {
  let component: MostrarListasComponent;
  let fixture: ComponentFixture<MostrarListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarListasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
