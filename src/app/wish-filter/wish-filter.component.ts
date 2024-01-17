import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})

export class WishFilterComponent {

  ngOnInit() : void {
    this.changeFilter('0')
  }

  @Output() filter = new EventEmitter<any>()

  // filter wishes
  listFilter : any = '0'

  changeFilter(value: any) {
    this.filter.emit(filters[value])
  }

}
