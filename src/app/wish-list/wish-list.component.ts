import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})

export class WishListComponent {
  
  @Input() wishes : WishItem[] = []

  // toggle wish item
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
  }

}
