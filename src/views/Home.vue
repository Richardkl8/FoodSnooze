<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-sm-12 col-md-6">
                <a>
                    <recipe-card
                        @click.native="$_goToRecipePage(recipe.idMeal)"
                        v-show="recipe"
                        :recipe="recipe"
                        :isRelatedFoods="true">
                    </recipe-card>
                </a>
            </div>
            <div class="col-sm-12 col-md-6">
                <custom-h1>
                    Welcome!
                </custom-h1>
                <custom-h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis non libero vitae
                    dictum.
                    Maecenas id lacinia eros. Maecenas in leo nisi. Aenean pharetra lectus vitae urna bibendum, nec
                    condimentum ante molestie. Vestibulum at lacus auctor, ornare tellus at, vehicula mi. Proin eget
                    nulla diam. Nulla facilisi. In hac habitasse platea dictumst. Aliquam et congue magna. Cras odio
                    tellus, volutpat sed velit eu, accumsan tempus tellus. Aliquam malesuada elit leo, ut rutrum
                    felis
                    egestas eu.
                </custom-h3>
                <custom-button
                    class="center"
                    text="randomize!"
                    @click.native="getRandomRecipe">
                </custom-button>
            </div>
        </div>

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
                recipe: {},
            };
        },
        methods: {
            getRandomRecipe() {
                this.apiService.getRandomRecipe()
                    .then((response) => {
                        this.recipe = response;
                    });
            },
        },
        created() {
            this.getRandomRecipe();
        },
    };
</script>

<style lang="scss" scoped>
</style>
