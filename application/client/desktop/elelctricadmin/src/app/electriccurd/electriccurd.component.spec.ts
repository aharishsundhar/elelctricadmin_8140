import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriccurdComponent } from './electriccurd.component';

describe('ElectriccurdComponent', () => {
  let component: ElectriccurdComponent;
  let fixture: ComponentFixture<ElectriccurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectriccurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectriccurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});