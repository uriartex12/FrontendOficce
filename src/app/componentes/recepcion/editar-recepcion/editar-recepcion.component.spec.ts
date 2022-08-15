import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRecepcionComponent } from './editar-recepcion.component';

describe('EditarRecepcionComponent', () => {
  let component: EditarRecepcionComponent;
  let fixture: ComponentFixture<EditarRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
