import { Component, OnInit } from '@angular/core';

// Models
import { Recipe } from './recipe.model';

// Services
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  public recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeSelected = recipe;
    });
  }
}
