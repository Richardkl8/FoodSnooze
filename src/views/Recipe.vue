<template>
    <div class="container">
        <section id="instructions">
            <div class="row my-5">
                <div class="col-sm-12 col-md-6">
                    <img :src="recipe.strMealThumb"
                         alt="recipe-image"
                         class="recipe-image">
                </div>
                <div class="col-sm-12 col-md-6 recipe-title">
                    <custom-h2>
                        <b>{{recipe.strMeal}}</b>
                    </custom-h2>
                    <custom-h2>
                        {{recipe.strCategory}}
                    </custom-h2>
                </div>
            </div>
        </section>
        <section id="ingredients">
            <div class="row my-5">
                <div class="col-12">
                    <custom-h2 class="mb-4 mt-5">
                        <b>Ingredients</b>
                    </custom-h2>
                    <div class="row">
                        <div v-for="ingredient in returnListOfIngredients()"
                             :key="ingredient"
                             class="col-md-6 col-sm-12">
                            <custom-h3 class="text-black">
                                <ul>
                                    <li v-html="ingredient"></li>
                                    <hr class="ingredient-divider">
                                </ul>
                            </custom-h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="how-to-cook">
            <div class="row">
                <div class="col-12">
                    <custom-h2 class="mb-4">
                        <b>How to cook</b>
                    </custom-h2>
                    <custom-h3>
                        {{recipe.strInstructions}}
                    </custom-h3>
                </div>
            </div>
        </section>
        <section v-if="videoUrl" id="video">
            <custom-h2 class="my-5">
                <b>Checkout the video</b>
            </custom-h2>
            <div class="row mb-5">
                <div class="col">
                    <iframe id="recipe-video"
                            :src="videoUrl"
                            frameborder="0"
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
        <section id="relatedFoods">
            <custom-h2 class="mt-5 mb-4">
                <b>You may also like</b>
            </custom-h2>
            <div class="row my-5">
                <div v-for="index in 3"
                     :key="index"
                     class="col-xs-12 col-md-4">
                    <recipe-card
                        :recipe="relatedMeals[index]"
                        @click.native="updateRouteWithMealId(relatedMeals[index].idMeal)">
                    </recipe-card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import RecipeCard from '@/components/RecipeCard.vue';

    export default {
        name: 'Home',
        components: {
            RecipeCard,
        },
        inject: [
            'apiService',
        ],
        data() {
            return {
                recipe: {},
                relatedMeals: [],
                videoUrl: '',
                showPage: false,
            };
        },
        watch: {
            // eslint-disable-next-line func-names
            '$route.params.id': function () {
                this.getRecipeById();
            },
        },
        methods: {
            getRecipeById() {
                this.apiService.getRecipeById(this.$route.params.id)
                    .then((response) => {
                        this.recipe = response;
                        this.getRecipeByCategory(response.strCategory);
                        this.setYoutubeEmbedUrl(response.strYoutube);
                    });
            },
            // Uses the category of the recipe the user requested to fetch related recipes
            getRecipeByCategory(category) {
                this.apiService.getRecipeByCategory(category)
                    .then((response) => {
                        this.relatedMeals = response;
                    });
            },
            // Youtube does not let you play video on your website without embedding them,
            // Therefore the url needs to be edited
            setYoutubeEmbedUrl() {
                this.videoUrl = this.recipe.strYoutube.replace('/watch?v=', '/embed/');
            },
            // Combines the ingredients with the measurements into 1 HTML string.
            returnListOfIngredients() {
                const entries = Object.entries(this.recipe);
                const ingredients = [];
                const measures = [];
                const final = [];

                entries.forEach(([key, value]) => {
                    if (key.startsWith('strIngredient') && value) {
                        ingredients.push(value);
                    }
                    if (key.startsWith('strMeasure') && value) {
                        measures.push(value);
                    }
                });
                // Using html tags to set to style the output.
                // The if statement is used to filter out empty measurements
                ingredients.forEach((ingredient, index) => {
                    if (measures[index] !== ' ') {
                        final.push(`<b>${ingredient}</b> <i>${measures[index]}</i>`);
                    } else {
                        final.push(`<b>${ingredient}</b>`);
                    }
                });
                return final;
            },
            updateRouteWithMealId(mealId) {
                if (this.$route.params.id !== mealId) {
                    this.$router.push(`/recipe/${mealId}`);
                }
            },
        },
        created() {
            this.getRecipeById();
        },
    };
</script>

<style lang="scss" scoped>
    .recipe-image {
        max-width: 100%;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    li {
        margin-top: .5rem;
    }

    hr {
        border: 1px solid #FF6F59;
    }

    .ingredient-divider {
        border: 1px solid #2DB396;
    }

    #recipe-video {
        width: 100%;
        height: 60rem;
    }

    @media screen and (max-width: 768px) {
        #recipe-video {
            height: 30rem;
        }

        .recipe-title {
            margin-top: 2rem;
        }

        .recipe-image {
            width: 75%;
        }
    }

    @media screen and (max-width: 1200px) {
        #recipe-video {
            height: 45rem;
        }
    }
</style>
