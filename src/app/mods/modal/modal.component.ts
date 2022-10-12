import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // Element Ref will give us ref to host element of this component.

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // need to append this to body element.
    console.log(el.nativeElement.nativeElement);

  }

  ngOnInit(): void {
    // called once when this comp is first created
    // and any properties is passed down from parent comp
    document.body.appendChild(this.el.nativeElement);
    console.log('init called!');
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
    console.log('destroy called!');
  }

  ngOnChanges(): void {
    // called anytime a properties of a parent comp is changed
    console.log('changes called!');
  }

  onCloseClick() {
    // child to parent component
    this.close.emit();
  }

}
