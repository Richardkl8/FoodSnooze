<template>
    <div class="container">
        <div class="row my-5">
            <div class="col">
                <custom-h1>
                    <b>Welcome to FoodSnooze.</b>
                </custom-h1>
                <custom-h3>
                    Don't know what to cook? Hit <b>snooze</b>, and let us choose!
                </custom-h3>
            </div>
        </div>
        <div class="row">
            <div v-for="recipe in recipes" :key="recipe.isMeal" class="col-xs-12 col-md-4">
                <router-link :to="`/recipe/${recipe.idMeal}`">
                    <recipe-card
                        v-show="recipe"
                        :recipe="recipe"
                        :isRelatedFoods="true">
                    </recipe-card>
                </router-link>
            </div>
        </div>
        <section id="snooze-button">
            <custom-button
                class="center"
                text="snooze"
                @click.native="getRandomRecipe">
            </custom-button>
        </section>
    </div>

</template>

<script>
    import RecipeCard from '@/components/RecipeCard.vue';
    import goToPageMixin from '../mixins/goToPageMixin';

    export default {
        name: 'Home',
        inject: [
            'apiService',
        ],
        mixins: [
            goToPageMixin,
        ],
        components: {
            RecipeCard,
        },
        data() {
            return {
                recipes: [],
            };
        },
        methods: {
            getRandomRecipe() {
                this.apiService.getRandomRecipes()
                    .then((response) => {
                        this.recipes = response;
                    });
            },
        },
        created() {
            this.getRandomRecipe();
        },
    };
</script>

<style lang="scss" scoped>
    #snooze-button {
        margin-top: 4rem;
        display: flex;
        justify-content: center;
    }
</style>
