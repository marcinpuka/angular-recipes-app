import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {

  selectdRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
