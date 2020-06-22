import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is simply a test",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg"
    ),
    new Recipe(
      "Another test recipe",
      "This is simply a test, mark two",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
    )
  ];
  public recipeSelected: Recipe;

  constructor() {}

  public onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected = recipe;
  }
}
