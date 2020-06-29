import { Component, OnInit } from '@angular/core';

// Models
import { Recipe } from '../recipe.model';

// Services
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClick(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
