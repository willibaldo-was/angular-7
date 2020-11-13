import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalidasPage } from './salidas.page';

describe('SalidasPage', () => {
  let component: SalidasPage;
  let fixture: ComponentFixture<SalidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
