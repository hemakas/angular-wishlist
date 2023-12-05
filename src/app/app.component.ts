import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

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
  listFilter : String = '0'
  get visibleItems() : WishItem[] {
    let value = this.listFilter

    if (value === '0') {
      return this.items
    } else if (value === '1') {
      return this.items.filter(item => !item.isComplete)
    } else {
      return this.items.filter(item => item.isComplete)
    }
  }

}
