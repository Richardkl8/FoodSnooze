<template>
    <div v-if="recipe" class="recipe-card">
        <img alt="recipe-image"
             class="recipe-image"
             :src="recipe.strMealThumb">
        <div class="recipe-text center">
            <custom-h3>
                <b>{{recipe.strMeal}}</b>
            </custom-h3>
            <custom-h3 v-if="isRelatedFoods">
                {{recipe.strCategory}}
            </custom-h3>
        </div>
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
    };
</script>

<style lang="scss" scoped>
    .recipe-card {
        overflow: hidden;
        max-width: 50rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;

        &:hover .recipe-image {
            transform: scale(1.02);
        }

        &:hover .recipe-text > h2 {
            text-decoration: underline;

        }
    }

    .recipe-image {
        max-width: 100%;
        transition:  all .3s ease-out;
    }

    .separator {
        border: 1px solid #C3C3C3;
    }

    .recipe-text {
        margin: 2rem 0;
    }

    @media screen and (max-width: 768px) {
        .recipe-card {
            flex-direction: row;
            margin-bottom: 2rem;
        }

        .recipe-image {
            width: 50%;
            height: 50%;
            margin-right: 2rem;
        }

        .recipe-text {
            margin: 0 0;
        }
    }
</style>
