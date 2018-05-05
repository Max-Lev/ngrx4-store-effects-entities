import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOptionsContainerComponent } from './input-options-container.component';

describe('InputOptionsContainerComponent', () => {
  let component: InputOptionsContainerComponent;
  let fixture: ComponentFixture<InputOptionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOptionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOptionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
