import { Injectable } from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { Observable } from "rxjs";

const FIREBASE_PATH = 'https://ng-course-recipe-book-daa15.firebaseio.com';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(`${FIREBASE_PATH}/recipes.json`, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(`${FIREBASE_PATH}/recipes.json`)
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
