import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { C1Component } from './c1.component';
import { S1Service } from '../s1.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';


describe('c1component', () => {
  let component: C1Component;
  let fixture: ComponentFixture<C1Component>;
  let service: S1Service;
  let de: DebugElement;
  let e1: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [C1Component],
      providers: [S1Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'))
    e1 = de.nativeElement;
  });

  it('Greet button', () => {
    component.greet();
    expect(component.greet).toBeDefined();
  });
  it('greet button to be called', () => {
    fixture.detectChanges();
    spyOn(component, 'greet');
    e1 = fixture.debugElement.query(By.css('button')).nativeElement
    e1.click();
    expect(component.greet).toHaveBeenCalledTimes(1);
  });
  // it('spyon service',()=>{
  //   jasmine.createSpyObj(service,'sendmessage');
  //   expect(component.mes).toBe('')
  // })
});
describe('c1 signoff button', () => {

  let component: C1Component;
  let fixture: ComponentFixture<C1Component>;
  let de: DebugElement;
  let e1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [C1Component]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('button'))
    e1 = de.nativeElement;
  });
  it('signoff button to be defined', () => {
    component.siginoff();
    expect(component.siginoff).toBeDefined();
  });

  // it('signoff',()=>{
  //   fixture.detectChanges();
  //   spyOn(component,'siginoff');
  //   e1=fixture.debugElement.query(By.css('button')).nativeElement
  //   e1.click();
  //   expect(component.siginoff).toHaveBeenCalled();
  // })

})
