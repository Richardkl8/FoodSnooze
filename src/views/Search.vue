<template>
    <div class="container">
        <section id="searched-items ">
            <custom-h2 class="mb-4 mt-5">
                <b>Search results for:</b>
                {{this.$route.params.query}}
            </custom-h2>
            <div v-if="hasFoundRecipes" class="row my-5">
                <div v-for="recipe in foundRecipes"
                     :key="recipe.mealId"
                     class="col-xs-12 col-md-4">
                    <router-link :to="`/recipe/${recipe.idMeal}`">
                        <recipe-card
                            testId="recipe-card-search"
                            :recipe="recipe">
                        </recipe-card>
                    </router-link>
                </div>
            </div>
            <div v-else>
                <div class="row" testId="error-message-search">
                    <div class="col">
                        <img src="https://images.assetsdelivery.com/compings_v2/lineartist/lineartist1905/lineartist190500646.jpg"
                             alt="crying chef">
                        <custom-h3>
                            <b>Sorry, </b>we couldn't find any recipes for: {{this.$route.params.query}}
                        </custom-h3>
                    </div>
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
        watch: {
            // eslint-disable-next-line func-names
            '$route.params.query': function () {
                this.getRecipeByQuery();
            },
        },
        data() {
            return {
                foundRecipes: [],
            };
        },
        computed: {
            hasFoundRecipes() {
                return this.foundRecipes.length;
            },
        },
        methods: {
            getRecipeByQuery() {
                this.apiService.getRecipeByQuery(this.$route.params.query)
                    .then((response) => {
                        if (response) {
                            this.foundRecipes = response;
                        } else {
                            this.foundRecipes = [];
                        }
                    });
            },
        },
        created() {
            this.getRecipeByQuery();
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

    .ingredients {
        padding: 3rem 2rem;
        border: solid 2px #2DB396;
        color: #fff;
    }
</style>
