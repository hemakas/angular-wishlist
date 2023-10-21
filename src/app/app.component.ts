import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Book UFC stadium'),
    new WishItem('Get coffee', true),
    new WishItem('Buy new shoes')
  ];
  
  title = 'wishlist';
}
