import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simpy a test', 
    'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'), 
    new Recipe('Burger', 'Double cheese', 'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2017/08/burgers_main-bacon-cheeseburger-hamburger-stand.jpg'
  )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
