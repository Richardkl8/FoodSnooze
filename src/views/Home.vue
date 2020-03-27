<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-6">
                <custom-h1>
                    Welcome!
                </custom-h1>
                <custom-h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis non libero vitae
                        dictum.
                        Maecenas id lacinia eros. Maecenas in leo nisi. Aenean pharetra lectus vitae urna bibendum, nec
                        condimentum ante molestie. Vestibulum at lacus auctor, ornare tellus at, vehicula mi. Proin eget
                        nulla diam. Nulla facilisi. In hac habitasse platea dictumst. Aliquam et congue magna. Cras odio
                        tellus, volutpat sed velit eu, accumsan tempus tellus. Aliquam malesuada elit leo, ut rutrum
                        felis
                        egestas eu.
                    </p>
                </custom-h3>
                <custom-button
                    class="center"
                    text="randomize!"
                    @click.native="getRandomRecipe">
                </custom-button>
            </div>
            <div class="col-6">
                <recipe-card
                    v-show="recipe"
                    :recipe="recipe">
                </recipe-card>
            </div>
        </div>

    </div>
</template>

<script>
    import RecipeCard from '@/components/RecipeCard.vue';

    export default {
        name: 'Home',
        inject: [
            'apiService',
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
            async getRandomRecipe() {
                this.apiService.getRandomRecipe()
                    .then((response) => {
                        this.recipe = response;
                        console.log(this.recipe);
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
