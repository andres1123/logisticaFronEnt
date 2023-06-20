import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarEntregaComponent } from './realizar-entrega.component';

describe('RealizarEntregaComponent', () => {
  let component: RealizarEntregaComponent;
  let fixture: ComponentFixture<RealizarEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealizarEntregaComponent]
    });
    fixture = TestBed.createComponent(RealizarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
