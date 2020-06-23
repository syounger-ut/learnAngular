import { Component, Input, EventEmitter, Output } from '@angular/core';

// Models
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onClick(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
