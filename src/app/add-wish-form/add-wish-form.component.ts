import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})

export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>()

  // add new wish function
  newWishText = ''

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ''
  }
}
