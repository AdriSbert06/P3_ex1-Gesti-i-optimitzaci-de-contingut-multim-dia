import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciComponent } from './inici.component';

describe('IniciComponent', () => {
  let component: IniciComponent;
  let fixture: ComponentFixture<IniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IniciComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
