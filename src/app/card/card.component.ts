import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;
  @Input() btnText: string = 'Add to shortlist';
  @Output() addToShortlist = new EventEmitter<number>();

  onAddToShortlist() {
    this.addToShortlist.emit(this.id);
  }
}
