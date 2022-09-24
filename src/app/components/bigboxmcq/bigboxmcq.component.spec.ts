import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigboxmcqComponent } from './bigboxmcq.component';

describe('BigboxmcqComponent', () => {
  let component: BigboxmcqComponent;
  let fixture: ComponentFixture<BigboxmcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigboxmcqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigboxmcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
