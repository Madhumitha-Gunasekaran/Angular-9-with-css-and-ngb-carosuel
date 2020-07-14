import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  mes = "Received messsage from Greet-Good Morning";
  mes1 = 'Greet is sent';
  called: boolean;
  constructor(private s1service: S1Service) { }

  ngOnInit(): void {
  }
  greet() {
    this.s1service.send(this.mes);
    this.s1service.sent(this.mes1);
  }
  siginoff() {
    this.called = true;
    this.s1service.signof('Received message to signing off ');
    this.s1service.signOfSent('signing off now is clicked')
  }
}
