import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponent } from './data-binding.component';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // FormsModule is required for [(ngModel)] bindings in the template
        // Keeping the import local to the test avoids pulling the entire AppModule
        // and keeps the unit test isolated.
        require('@angular/forms').FormsModule
      ],
      declarations: [DataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
