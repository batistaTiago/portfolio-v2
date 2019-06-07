import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorProjectsComponent } from './minor-projects.component';

describe('MinorProjectsComponent', () => {
  let component: MinorProjectsComponent;
  let fixture: ComponentFixture<MinorProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
