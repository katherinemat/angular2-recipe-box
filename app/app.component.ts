import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>A bunch of good recipes</h3>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.name}}: {{currentRecipe.ingredients}} - {{currentRecipe.instructions}}</li>
    </ul>
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
}

export class Recipe {
  cookingTime: string = '30m';

  constructor(public name: string, public ingredients: string[], public instructions: string, public rating: number){}
}
