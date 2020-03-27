<template>
    <header>
        <div class="container">
            <div class="flex-box">
                <custom-h1 class="text-white">
                    <router-link to="/">
                        <b>FoodSnooze</b>
                    </router-link>
                </custom-h1>
                <input
                    id="search"
                    placeholder="search for recipes"
                    v-model="query"
                    @keyup.enter="goToSearchPage(query)"/>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'CustomHeader',
        data() {
            return {
                query: '',
            };
        },
        methods: {
            goToSearchPage(query) {
                // Only executes when the query is different then the current query
                if (this.$route.params.query !== query && query) {
                    this.$router.push(`/search/${query}`);
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    header {
        background-color: #2DB396;
        width: 100vw;
        height: 10rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 40rem;
        padding: 1rem 2rem;
        font-size: 1.8rem;
        border: none;
        border-radius: 2rem;

        &:hover {
            cursor: text;
        }
    }

    a {
        color: white
    }

    .flex-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
