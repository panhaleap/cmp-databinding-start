import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

// it is a good practice to implement interface for each function that we use
export class ServerElementComponent implements
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
  // srvElement is alias of element
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  // 1st
  constructor() {
    console.log('constructor called!');
  }

  // 2nd
  // this is only hook that need argument
  // argument 'changes' has previousValue and currentValue
  // called after a bound input property(property with @Input) changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  // called once the component is initialized. It run after constructor.
  // 3rd
  // this.header is undefined because DOM hasn't render yet.
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content', this.header?.nativeElement?.textContent);
    console.log('Text Content of Paragraph', this.paragraph?.nativeElement?.textContent);
  }

  // called during every change detection run. Run when something are changed in the template or in component.
  // call multi-times even when click button
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // called after content(ng-content) has been projected into view.
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of Paragraph', this.paragraph?.nativeElement?.textContent);
  }

  // called every time the projected content has been checked.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  // called after the component's view (and child views) has been initialized.
  // This can called the value of this.header?.nativeElement?.textContent is after DOM already random.
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Header', this.header);
    console.log('Text Content', this.header?.nativeElement?.textContent);
  }

  // called every time the view (and child views) have been checked.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  // called once the component is about to be destroyed.Example when using ngIf to render some content,
  // and meet the false logic and content not show. That's called destroy the object.
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
