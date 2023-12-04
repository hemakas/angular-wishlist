import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  // wish item array
  items : WishItem[] = []
  
  title = 'wishlist'
  newWishText = ''

  // add new wish function
  addNewWish() {
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete
    console.log(item)
  }

}
