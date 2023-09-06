import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  @ViewChild('btnRef') btnRef!: ElementRef<HTMLElement> | null;
  @ViewChild('bottomRef') bottomRef!: ElementRef<HTMLElement> | null;
  @ViewChild('chartsRef') chartsRef!: ElementRef<HTMLElement> | null;

  leftClick(): void {
    if (this.btnRef &&this.bottomRef && this.chartsRef) {
      console.log(this.btnRef);
      this.btnRef.nativeElement.style.left = '4px';
      this.bottomRef.nativeElement.style.color = 'white'
      this.chartsRef.nativeElement.style.color = ' rgba(156,163,175)'
    }
  }

  rightClick(){
    if (this.btnRef &&this.bottomRef && this.chartsRef) {
      console.log('aaaaaa');
      this.btnRef.nativeElement.style.left = '110px';
      this.chartsRef.nativeElement.style.color = 'white'
      this.bottomRef.nativeElement.style.color = 'rgba(156,163,175)'
    }
  }
  
}
