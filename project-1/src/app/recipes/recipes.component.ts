import { Component, OnInit } from '@angular/core';

// Models
import { Recipe } from './recipe.model';

// Services
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  public recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeSelected = this.recipeService.recipeSelected;
  }
}
