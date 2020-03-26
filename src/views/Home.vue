<template>
    <div class="home">
        <RecipeCard></RecipeCard>
    </div>
</template>

<script>
    import RecipeCard from '@/components/RecipeCard.vue';

    export default {
        name: 'Home',
        components: {
            RecipeCard,
        },
    };
</script>
