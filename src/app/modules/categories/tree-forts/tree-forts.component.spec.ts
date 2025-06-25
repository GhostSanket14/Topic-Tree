import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFortsComponent } from './tree-forts.component';

describe('TreeFortsComponent', () => {
  let component: TreeFortsComponent;
  let fixture: ComponentFixture<TreeFortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeFortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
