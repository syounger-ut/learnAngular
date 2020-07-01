import { Component } from '@angular/core';
// Services
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService],
})
export class RecipesComponent {
}
