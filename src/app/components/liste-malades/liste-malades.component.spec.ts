import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaladesComponent } from './liste-malades.component';

describe('ListeMaladesComponent', () => {
  let component: ListeMaladesComponent;
  let fixture: ComponentFixture<ListeMaladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMaladesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
