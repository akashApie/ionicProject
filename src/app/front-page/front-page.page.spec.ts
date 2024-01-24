import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontPagePage } from './front-page.page';

describe('FrontPagePage', () => {
  let component: FrontPagePage;
  let fixture: ComponentFixture<FrontPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrontPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
