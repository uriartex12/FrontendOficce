import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecepcionComponent } from './ver-recepcion.component';

describe('VerRecepcionComponent', () => {
  let component: VerRecepcionComponent;
  let fixture: ComponentFixture<VerRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRecepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
