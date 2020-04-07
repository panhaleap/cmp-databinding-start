import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit, AfterViewInit {

  @ViewChild('myTimeInterval') myTime: ElementRef;
  myInterval;

  constructor() {
  }

  ngOnInit(): void {
  }

  myTimer() {
    const date = new Date();
    const localTime = date.toLocaleTimeString();
    this.myTime.nativeElement.textContent = localTime;
  }

  ngAfterViewInit() {
    this.myInterval = setInterval( () => { this.myTimer(); } , 1000);
  }

  startInterval() {
    this.myInterval = setInterval( () => { this.myTimer(); } , 1000);
  }

  stopInterval() {
    clearInterval(this.myInterval);
  }
}
