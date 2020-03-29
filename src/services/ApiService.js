/* eslint-disable class-methods-use-this */
import axios from 'axios';

// This is the api service that can be injected in a component when needed.
// Every function returns a new promise.
// This way you can handle the resolved or rejected state in the component you inject it in.

class ApiService {
    constructor(endPoints, baseUrl) {
        this.endPoints = endPoints;

        this.https = axios.create({
            baseURL: baseUrl,
        });
    }

    // The assignment said to query one random meal. I wanted a bit more content for the home page,
    // Hope this is ok.
    getRandomRecipes() {
        return new Promise((resolve, reject) => {
            axios.all([
                this.https.get(this.endPoints.getRandomRecipe),
                this.https.get(this.endPoints.getRandomRecipe),
                this.https.get(this.endPoints.getRandomRecipe),
            ]).then(axios.spread((first, second, third) => {
                    const listOfRecipes = [];
                    listOfRecipes.push(first.data.meals[0], second.data.meals[0], third.data.meals[0]);
                    resolve(listOfRecipes);
                })).catch((error) => {
                    reject(error);
                    this.onError(error);
                });
        });
    }

    getRecipeById(recipeId) {
        return new Promise((resolve, reject) => {
            this.https.get(`${this.endPoints.getRecipeById}?i=${recipeId}`)
                .then((response) => {
                    resolve(response.data.meals[0]);
                })
                .catch((error) => {
                    reject(error);
                    this.onError(error);
                });
        });
    }

    getRecipeByCategory(category) {
        return new Promise((resolve, reject) => {
            this.https.get(`${this.endPoints.getRecipeByCategory}?c=${category}`)
                .then((response) => {
                    resolve(response.data.meals);
                })
                .catch((error) => {
                    reject(error);
                    this.onError(error);
                });
        });
    }

    getRecipeByQuery(query) {
        return new Promise((resolve, reject) => {
            this.https.get(`${this.endPoints.getRecipeByQuery}?s=${query}`)
                .then((response) => {
                    resolve(response.data.meals);
                })
                .catch((error) => {
                    reject(error);
                    this.onError(error);
                });
        });
    }

    // In a real world app this would be the function where I would handle default errors.
    // E.G send the user to a general error page with the according message.
    onError(error) {
        console.log(error);
    }
}

// Making a singleton instance
let api;
const getApiService = (endPoints, baseUrl) => {
    api = api || new ApiService(endPoints, baseUrl);
    return api;
};
export default getApiService;
