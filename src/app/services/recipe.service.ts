import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Creamy Chicken Casserole',
  //     'Simple and tasty',
  //     'https://www.eatingwell.com/thmb/MgogUdX7uFDsesnGLAqkmdZiZ8M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg',
  //     [
  //       new Ingredient('Cream', 1),
  //       new Ingredient('Chicken', 3),
  //       new Ingredient('Mushroom', 20),
  //       new Ingredient('Spinach', 8),
  //     ]
  //   ),
  //   new Recipe(
  //     'Big Tasty Burger',
  //     'Very big and very tasty',
  //     'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1600,c_limit/Smashburger-recipe-120219.jpg',
  //     [
  //       new Ingredient('Meat', 2),
  //       new Ingredient('Pickles', 10),
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Cheese', 2),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);

    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;

    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);

    this.recipesChanged.next(this.recipes.slice());
  }
}
