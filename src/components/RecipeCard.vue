<template>
    <div v-if="recipe" class="recipe-card">
        <img alt="recipe-image"
             class="recipe-image"
             :src="recipe.strMealThumb">
        <div class="recipe-text center">
            <custom-h2>
                <b>{{recipe.strMeal}}</b>
            </custom-h2>
            <custom-h3 v-if="isRelatedFoods">
                {{recipe.strCategory}}
            </custom-h3>
            <custom-h3 v-if="isRelatedFoods">
                {{recipe.strTags}}
            </custom-h3>
        </div>
        <div v-if="isRelatedFoods" class="separator"></div>
    </div>
</template>

<script>
    export default {
        props: {
            recipe: {
                type: Object,
            },
            isRelatedFoods: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            // TODO: REMOVE
            getIngredients() {
                const entries = Object.entries(this.recipe);
                const ingredients = [];
                entries.forEach(([key, value]) => {
                    if (key.startsWith('strIngredient') && value) {
                        ingredients.push(value);
                    }
                });
                return ingredients;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .recipe-card {
        overflow: hidden;
        max-width: 50rem;
        cursor: pointer;

        &:hover .recipe-image {
            transform: scale(1.02);
        }

        &:hover .recipe-text > h2 {
            text-decoration: underline;

        }
    }

    .recipe-image {
        max-width: 100%;
        /*TODO: find transitions*/
        transition:  all .3s ease-out;
    }

    .separator {
        border: 1px solid #C3C3C3;
    }

    .recipe-text {
        margin: 2rem 0;
    }
</style>
