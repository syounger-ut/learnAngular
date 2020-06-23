import { Component, Input } from '@angular/core';

// Models
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

// Services
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent {
  @Input() recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  public onRecipeSelected(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }
}
