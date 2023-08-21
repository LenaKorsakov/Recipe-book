import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AppRoute } from 'src/@const/app-route';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: AppRoute.Recipes,
    component: RecipesComponent,
    // children: [{ path: ':id', component: RecipeDetailComponent }],
  },
  {
    path: AppRoute.ShoppingList,
    component: ShoppingListComponent,
    // children: [{ path: '/edit', component: ShoppingListEditComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}