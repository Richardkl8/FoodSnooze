<template>
    <div id="app">
        <custom-header></custom-header>
        <router-view/>
        <custom-footer></custom-footer>
    </div>
</template>

<script>
    import CustomHeader from '@/components/layout/CustomHeader.vue';
    import CustomFooter from '@/components/layout/CustomFooter.vue';

    export default {
        components: {
            CustomHeader,
            CustomFooter,
        },
    };
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

    *,
    *::after,
    *::before {
        box-sizing: inherit;
        font-family: Montserrat, sans-serif;
    }

    html {
        height: 100%;
        width: 100%;
        font-size: 62.5%;

        @media only screen and (max-width: 900px) {
            font-size: 56.25%;
        }
        @media only screen and (max-width: 1200px) {
            font-size: 56.25%;
        }
        @media only screen and (min-width: 1800px) {
            font-size: 70%;
        }
    }

    body {
        height: 100%;
        width: 100%;
        font-family: Montserrat, serif;
        box-sizing: border-box;
    }

    #app {
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 100%;
    }

    .text-white {
        color: #fff;
    }

    .text-black {
        color: #071E22;
    }
</style>
