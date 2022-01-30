import { Component } from '@angular/core';
import {Item} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
  filter :'all'|'active'|'done' = 'all';

  allItems = [
            {description:'Go to gymn @ 6 PM', done:true},
            {description:'Go to office @ 9', done:false},
            {description:'breakfast @ 8', done:false}
            ];


getItems(){
  if (this.filter=='all')
  {
    return this.allItems;
  }
  else {
    return this.allItems.filter(item => this.filter ==='done'?item.done:!item.done);
  }
}


addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}


}
