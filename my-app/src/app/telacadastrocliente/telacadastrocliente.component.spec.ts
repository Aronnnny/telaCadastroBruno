import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelacadastroclienteComponent } from './telacadastrocliente.component';

describe('TelacadastroclienteComponent', () => {
  let component: TelacadastroclienteComponent;
  let fixture: ComponentFixture<TelacadastroclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelacadastroclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelacadastroclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
