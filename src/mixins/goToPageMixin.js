export default {
    methods: {
        $_goToRecipePage(recipeId) {
            this.$router.push(`/recipe/${recipeId}`);
        },
    },
};
