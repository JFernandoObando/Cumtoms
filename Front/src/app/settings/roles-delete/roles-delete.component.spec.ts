import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesDeleteComponent } from './roles-delete.component';

describe('RolesDeleteComponent', () => {
  let component: RolesDeleteComponent;
  let fixture: ComponentFixture<RolesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
