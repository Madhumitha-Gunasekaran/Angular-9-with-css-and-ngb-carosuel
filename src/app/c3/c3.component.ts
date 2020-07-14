import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  sent: any;
  signofsent: any;
  counter: boolean;
  constructor(private s3service: S1Service) { }


  ngOnInit(): void {
    this.counter = false;
    this.c3sentGreet();
    this.c3sentSgnOff();

  }
  c3sentGreet() {
    this.s3service.sentmessage.subscribe(res => {
      this.sent = res;
    });

  }
  c3sentSgnOff() {
    this.counter = true;
    this.s3service.sentoff.subscribe(res => {
      this.signofsent = res;
    })

  }

}
