import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFortsBuilderComponent } from './tree-forts-builder.component';

describe('TreeFortsBuilderComponent', () => {
  let component: TreeFortsBuilderComponent;
  let fixture: ComponentFixture<TreeFortsBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeFortsBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFortsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
