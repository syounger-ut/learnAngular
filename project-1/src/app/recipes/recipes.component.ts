import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent {
  public recipeSelected: Recipe;

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected = recipe;
  }
}
