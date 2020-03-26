<template>
    <div id="app">
        <custom-header></custom-header>
        <router-view class="container"/>
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

    *,
    *::after,
    *::before {
        box-sizing: inherit;
        font-family: Montserrat, serif;
    }

    html {
        font-size: 62.5%;

        @media only screen and (max-width: 56.25em) { //900 px
            font-size: 50%;
        }
        @media only screen and (max-width: 75em) { //1200px
            font-size: 56.25%;
        }
        @media only screen and (min-width: 112.5em) { //1800px
            font-size: 75%;
        }
    }

    body {
        font-family: Montserrat, serif;
        box-sizing: border-box;
    }

    .text-white {
        color: #fff;
    }

    .text-black {
        color: #071E22;
    }
</style>
