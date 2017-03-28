var Recipe = (function () {
    function Recipe(ingredients, instructions, rating) {
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.rating = rating;
        this.cookingTime = '30m';
    }
    return Recipe;
}());
var recipes = [];
recipes.push(new Recipe(['chocolate', 'peanuts', 'coconut'], 'mix together and serve', 5));
recipes.push(new Recipe(['chicken', 'salad', 'spices'], 'mix together and serve', 4));
for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
    var recipe = recipes_1[_i];
    console.log(recipe);
}
