export default {
    getRandomRecipe: process.env.VUE_APP_ENDPOINT_GET_RANDOM_RECIPE,
    getRecipeById: process.env.VUE_APP_ENDPOINT_GET_RECIPE_BY_ID,
    getRecipeByCategory: process.env.VUE_APP_ENDPOINT_GET_RECIPE_BY_CATEGORY,
    getRecipeByQuery: process.env.VUE_APP_ENDPOINT_GET_RECIPE_BY_QUERY,
};
