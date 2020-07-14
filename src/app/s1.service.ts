import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
  sentmessage = new Subject();
  sendmessage = new Subject();
  signoffmessage = new Subject();
  sentoff = new Subject();
  event = [
    {
      question1: 'how many years of experince on Angular',
      radio1: '<1',
      option1: '>1'
    },
    {
      question1: 'select any one of your favourite series',
      radio1: 'Peaky Blinders',
      option1: 'Dark'

    },
    {
      question1: 'choose your favourite actor',
      radio1: 'Thomas shelby',
      option1: 'Jonas'
    },
    {
      question1: 'your Job loaction',
      radio1: 'India',
      option1: 'outside India',
    },
    {
      question1: 'what is your domain',
      radio1: 'IT',
      option1: 'ITES'
    },
  ]

  constructor() { }
  //will get from c1 and to c2 component
  send(msg) {
    this.sendmessage.next(msg);
  }
  //will get from c1 and to c3 as sent 
  sent(data) {
    this.sentmessage.next(data);
  }
  // will get from c1 to c2 as "signoff from c1"
  signof(res) {
    this.signoffmessage.next(res);
  }
  // will get from c1 to c3 as "signoff set ""
  signOfSent(resp) {
    this.sentoff.next(resp);
  }
  caroseul() {
    return this.event.slice();
  }
}


