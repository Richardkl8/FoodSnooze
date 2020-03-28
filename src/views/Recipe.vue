<template>
    <div class="container">
        <section id="instructions">
            <div class="row my-5">
                <div class="col-sm-12 col-md-6">
                    <img :src="recipe.strMealThumb"
                         alt="recipe-image"
                         class="recipe-image">
                </div>
                <div class="col-sm-12 col-md-6">
                    <custom-h2>
                        <b>
                            {{recipe.strMeal}}
                        </b>
                    </custom-h2>
                    <custom-h3>
                        {{recipe.strInstructions}}
                    </custom-h3>
                </div>
            </div>
        </section>
        <section id="ingredients">
            <div class="ingredients my-5">
                <custom-h2 class="mb-4"><b>Ingredients</b></custom-h2>
                <div class="row">
                    <div v-for="ingredient in returnListOfIngredients()"
                         :key="ingredient"
                         class="col-md-6">
                        <custom-h3 class="text-black">
                            <ul>
                                <li>
                                    {{ingredient}}
                                    <hr>
                                </li>
                            </ul>
                        </custom-h3>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="videoUrl" id="video">
            <custom-h2 class="mb-4"><b>Checkout the video</b></custom-h2>
            <div class="row my-5">
                <div class="col">
<!--                    TODO: create class for this-->
                    <iframe id="recipe-video"
                            :src="videoUrl"
                            frameborder="0" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
        <section id="relatedFoods">
            <custom-h2 class="mb-4"><b>You may also like</b></custom-h2>
            <div class="row my-5">
                <div v-for="index in 3"
                     :key="index"
                     class="col-xs-12 col-md-4">
                    <recipe-card
                        :recipe="relatedMeals[index]"
                        @click.native="$_goToRecipePage(relatedMeals[index].idMeal)">
                    </recipe-card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import RecipeCard from '@/components/RecipeCard.vue';
    import goToPageMixin from '../mixins/goToPageMixin';

    export default {
        name: 'Home',
        components: {
            RecipeCard,
        },
        mixins: [
            goToPageMixin,
        ],
        inject: [
            'apiService',
        ],
        data() {
            return {
                recipe: {},
                relatedMeals: [],
                videoUrl: '',
            };
        },
        watch: {
            $route() {
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

                ingredients.forEach((ingredient, index) => {
                    if (measures[index] !== ' ') {
                        final.push(`${ingredient} - ${measures[index]}`);
                    } else {
                        final.push(ingredient);
                    }
                });
                return final;
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
        margin: 1rem 0;
    }

    #recipe-video {
        width: 100%;
        height: 60rem;
    }

    .ingredients {
        padding: 3rem 2rem;
        border: solid 2px #2DB396;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        #recipe-video {
            height: 30rem;
        }
    }

    @media screen and (max-width: 1200px) {
        #recipe-video {
            height: 45rem;
        }
    }
</style>
