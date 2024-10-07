import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsAgeComponent } from './listings-age.component';

describe('ListingsAgeComponent', () => {
  let component: ListingsAgeComponent;
  let fixture: ComponentFixture<ListingsAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingsAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingsAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
