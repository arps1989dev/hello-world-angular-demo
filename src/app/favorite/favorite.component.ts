import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}


  export interface FavoriteChangeEventArgs {
    newValue: boolean
  }

