<template>
    <div>
        <recipe-card></recipe-card>
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
            getRandomRecipe() {
                console.log(1);
                this.apiService.getRandomRecipe()
                    .then((response) => {
                        console.log(response);
                    }).catch(() => {});
            },
        },
        mounted() {
            this.getRandomRecipe();
        },
    };
</script>

<style lang="scss" scoped>
</style>
