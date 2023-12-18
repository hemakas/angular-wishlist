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

  // toggle wish item
  items : WishItem[] = []
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
  }

  // add new wish function
  newWishText = ''
  addNewWish() {
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }

  // filter wishes
  listFilter : any = '0'
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  }

}
