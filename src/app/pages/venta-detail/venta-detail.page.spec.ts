import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentaDetailPage } from './venta-detail.page';

describe('VentaDetailPage', () => {
  let component: VentaDetailPage;
  let fixture: ComponentFixture<VentaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
