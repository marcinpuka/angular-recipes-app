import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() itemCreated = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onItemAdded() {

    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value
    );

    this.itemCreated.emit(newIngredient);

  }

}
