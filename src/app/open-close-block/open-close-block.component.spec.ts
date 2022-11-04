import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseBlockComponent } from './open-close-block.component';

describe('OpenCloseBlockComponent', () => {
  let component: OpenCloseBlockComponent;
  let fixture: ComponentFixture<OpenCloseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCloseBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenCloseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
