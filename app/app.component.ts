import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>A bunch of good recipes</h3>
    <ul>
      <li  [class] = "ratingColor(currentRecipe)" *ngFor="let currentRecipe of recipes">{{currentRecipe.name}} - ingredients:
        <ul>
          <li *ngFor="let currentIngredient of currentRecipe.ingredients">
          {{currentIngredient}}
          </li>
        </ul>
       instructions: {{currentRecipe.instructions}}
       <button (click)="editRecipe(currentRecipe)">Edit</button>
      </li>
    </ul>
    <div *ngIf="selectedRecipe">
      <h3>Edit Recipe</h3>
      <label>Enter Recipe Name:</label>
      <input [(ngModel)]="selectedRecipe.name">
      <label>Enter Recipe Rating (1-5):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="1">1<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="2">2<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="3">3<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="4">4<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="5">5<br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('dessert', ['chocolate', 'peanuts', 'coconut'], 'mix together and serve', 5),
    new Recipe('dinner', ['chicken', 'salad', 'spices'], 'mix together and serve', 4),
    new Recipe('sweet potato burrito', ['salsa', 'sweet potato', 'cilantro', 'black beans', 'tortilla'], 'cook sweet potato and put everything inside of a tortilla', 5),
    new Recipe('grilled chicken', ['chicken', 'spices'], 'grill the chicken', 4)
  ];

  selectedRecipe = null;

  editRecipe(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  ratingColor(currentRecipe: Recipe){
    if (currentRecipe.rating === 4){
      return "bg-danger";
    }
    else {
      return "bg-info";
    }

  }

}

export class Recipe {
  cookingTime: string = '30m';

  constructor(public name: string, public ingredients: string[], public instructions: string, public rating: number){}
}
