import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'wishlist'
  items : WishItem[] = []

  // filter wishes
  listFilter : any = '0'
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  }

}
