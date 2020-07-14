import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers: [NgbCarouselConfig]
})
export class C2Component implements OnInit {
  send: any;
  signoff: any;
  count: boolean;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  event = [];


  constructor(private service: S1Service, config: NgbCarouselConfig) {
    //  config. showNavigationArrows = true;
    //  config.showNavigationIndicators = true;
  }


  ngOnInit(): void {
    this.sendmessage();
    this.sgnOffmessage();
    this.getcarousel();
  }


  sendmessage() {
    this.service.sendmessage.subscribe(res => {
      this.send = res;
    });
  }

  sgnOffmessage() {
    this.count = true;
    this.service.signoffmessage.subscribe(res => {
      this.signoff = res;
    });
  }

  getcarousel() {
    this.event = this.service.caroseul()
    console.log(this.event[0]);
  }

}
