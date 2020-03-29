<template>
    <header>
        <div class="container">
            <div class="center-items">
                <custom-h1 class="text-white">
                    <router-link class="text-white" to="/">
                        <b id="title">FoodSnooze</b>
                        <b id="title-mobile">FS</b>
                    </router-link>
                </custom-h1>
                <input
                    id="search"
                    placeholder="search for recipes"
                    v-model="query"
                    @keydown.enter="goToSearchPage(query)"/>
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
        watch: {
            $router() {
                this.query = '';
            },
        },
        methods: {
            goToSearchPage(query) {
                // Only executes when the query is different then the current query
                // and not on an empty query
                if (this.$route.params.query !== query && query) {
                    this.$router.push(`/search/${query}`);
                }
                this.query = '';
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
        color: #fff;
    }

    input {
        width: 40rem;
        padding: 1rem 2rem;
        font-size: 1.75rem;
        border: none;
        border-radius: 2rem;

        &:hover {
            cursor: text;
        }
    }

    .center-items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #title-mobile {
        display: none;
    }

    @media screen and (max-width: 768px) {
        #title {
            display: none;
        }

        #title-mobile {
            display: block;
            margin-right: 1rem;
        }
    }
</style>
