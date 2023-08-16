import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipyLoaded') recipe: Recipe;

  @Output() currentRecipe = new EventEmitter<void>();

  onRecipeSelected() {
    this.currentRecipe.emit();
  }
}
