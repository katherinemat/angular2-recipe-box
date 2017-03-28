class Recipe {
  cookingTime: string = '30m';

  constructor(public ingredients: string[], public instructions: string, public rating: number){}
}

var recipes: Recipe[] = [];
recipes.push(new Recipe(['chocolate', 'peanuts', 'coconut'], 'mix together and serve', 5));
recipes.push(new Recipe(['chicken', 'salad', 'spices'], 'mix together and serve', 4));

for(var recipe of recipes) {
  console.log(recipe);
}
