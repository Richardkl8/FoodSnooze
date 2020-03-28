/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ApiService {
    constructor(endPoints, baseUrl) {
        this.endPoints = endPoints;

        this.https = axios.create({
            baseURL: baseUrl,
        });
    }

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

     onError(error) {
         console.log(error);
         // TODO: push to error page
    }
}

let api;
const getApiService = (endPoints, baseUrl) => {
    api = api || new ApiService(endPoints, baseUrl);
    return api;
};
export default getApiService;
