import { Injectable } from '@angular/core';

// Models
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

// Services
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Schnitzel",
      "This is simply a test",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg",
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)],
    ),
    new Recipe(
      "Burgers",
      "This is simply a test, mark two",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)],
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
