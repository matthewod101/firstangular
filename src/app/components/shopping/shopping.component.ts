import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  items: ShoppingItem[] = [
    { description: 'Shampoo' },
    { description: 'Beer' },
    { description: 'More beer' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
