import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWrapComponent } from './portfolio-wrap.component';

describe('PortfolioWrapComponent', () => {
  let component: PortfolioWrapComponent;
  let fixture: ComponentFixture<PortfolioWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
