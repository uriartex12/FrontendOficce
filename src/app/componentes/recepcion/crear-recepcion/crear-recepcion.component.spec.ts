import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecepcionComponent } from './crear-recepcion.component';

describe('CrearRecepcionComponent', () => {
  let component: CrearRecepcionComponent;
  let fixture: ComponentFixture<CrearRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
