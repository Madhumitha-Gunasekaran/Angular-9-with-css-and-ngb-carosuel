import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { C2Component } from './c2.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { S1Service } from '../s1.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
describe('C2Component', () => {
  let component: C2Component;
  let fixture: ComponentFixture<C2Component>;
  let de: DebugElement;
  let e1: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [C2Component],
      providers: [S1Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2Component);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'))
    e1 = de.nativeElement;
  });

  it('send message', () => {
    fixture.detectChanges();
    const service = TestBed.get(S1Service);
    const spyon = spyOn(service, 'send').and.callThrough();
    component.sendmessage();
    expect(spyon).toBeDefined();

  });
  it('greet messages', () => {
    const service = TestBed.get(S1Service);
    const spy = spyOn(service, 'signof').and.callThrough();
    component.sgnOffmessage();
    expect(spy).toBeDefined()
  })

});