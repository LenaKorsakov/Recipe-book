import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Test desc',
      'https://www.eatingwell.com/thmb/MgogUdX7uFDsesnGLAqkmdZiZ8M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg'
    ),
    new Recipe(
      'Baked Salmon',
      'Very tasty!',
      'https://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'Test desc',
      'https://www.eatingwell.com/thmb/MgogUdX7uFDsesnGLAqkmdZiZ8M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
