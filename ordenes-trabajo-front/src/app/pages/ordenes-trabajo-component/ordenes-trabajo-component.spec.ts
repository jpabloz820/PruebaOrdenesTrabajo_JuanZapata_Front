import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTrabajoComponent } from './ordenes-trabajo-component';

describe('OrdenesTrabajoComponent', () => {
  let component: OrdenesTrabajoComponent;
  let fixture: ComponentFixture<OrdenesTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesTrabajoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
