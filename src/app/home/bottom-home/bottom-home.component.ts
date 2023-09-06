import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-bottom-home',
  templateUrl: './bottom-home.component.html',
  styleUrls: ['./bottom-home.component.css']
})
export class BottomHomeComponent {
  
  isCardVisible: boolean[] = [false, false, false];

  constructor(private elRef: ElementRef){}
  toggleCardVisibility(index: number) {
    // Close all toggles
    for (let i = 1; i <= 3; i++) {
      this.isCardVisible[i] = false;
    }

    // Open the clicked toggle
    this.isCardVisible[index] = true;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Close all cards if the click is outside of any card
    if (!this.elRef.nativeElement.contains(event.target)) {
      for (let i = 1; i <= 3; i++) {
        this.isCardVisible[i] = false;
      }
    }
  }
  
  
}
