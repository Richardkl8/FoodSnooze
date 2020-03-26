/* eslint-disable class-methods-use-this */
class ApiService {
    constructor(endPoints) {
        this.endPoints = endPoints;
    }

    getRandomRecipe() {
        return new Promise((resolve, reject) => {
            console.log(`https://www.themealdb.com/api/json/v1/1${this.endPoints.getRandomRecipe}`);
            fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // getRandomRecipe() {
    //     return new Promise(async (resolve, reject) => {
    //         const response = await fetch(`https://www.themealdb.com/api/json/v1/1${this.endPoints.getRandomRecipe}`, {
    //             method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //             mode: 'no-cors', // no-cors, *cors, same-origin
    //             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //             credentials: 'same-origin', // include, *same-origin, omit
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                 // 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             redirect: 'follow', // manual, *follow, error
    //             referrerPolicy: 'no-referrer', // no-referrer, *client
    //             body: JSON.stringify(data) // body data type must match "Content-Type" header
    //         });
    //         return await response.json(); // parses JSON response into native JavaScript objects
    //     }
    //
    // });
    // }
}


let api;
const getApiService = (endPoints) => {
    api = api || new ApiService(endPoints);
    return api;
};
export default getApiService;
