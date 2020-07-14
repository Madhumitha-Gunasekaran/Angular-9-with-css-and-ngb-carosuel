import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Component } from './c3.component';
import { S1Service } from '../s1.service';
import { DebugElement } from '@angular/core';
// import { of } from 'rxjs/Observable/of';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Subject } from 'rxjs';


describe('C3Component', () => {
  let component: C3Component;
  let fixture: ComponentFixture<C3Component>;
  let service: S1Service;
  let d1 = DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [C3Component],
      providers: [S1Service],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Component);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });
  it('to be false', () => {
    expect(component.counter).toBeFalsy();
  })

  it('to be defined', () => {
    fixture.detectChanges();
    spyOn(component, 'c3sentGreet');
    expect(component.counter).toBeTruthy();
  })

})




