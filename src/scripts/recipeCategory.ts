//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface

//TODO (CONSTRUCTORS EXERCISE)
//2. Delete the name and foodGroups properties.
//1. Add code so that RecipeCategory inherits from BaseRecipeCategory
class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
    description: string;
    examples: IExample[];

    constructor(recipeCategory: IRecipeCategory) {

        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }

    
} 