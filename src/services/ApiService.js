/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ApiService {
    constructor(endPoints, baseUrl) {
        this.endPoints = endPoints;

        this.https = axios.create({
            baseURL: baseUrl,
        });
    }

    getRandomRecipe() {
        return new Promise((resolve, reject) => {
            this.https.get(this.endPoints.getRandomRecipe)
                .then((response) => {
                    resolve(response.data.meals[0]);
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
