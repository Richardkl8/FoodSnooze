<template>
    <footer class="center-items">
        <div class="container">
            <custom-h3 class="text-white">
                <b>FoodSnooze</b><br>
                Who doesn't like to snooze?!
            </custom-h3>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'CustomFooter',
    };
</script>

<style lang="scss" scoped>
    footer {
        margin-top: 3rem;
        background-color: #2DB396;
        width: 100%;
        height: 10rem;
    }

    .center-items {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
