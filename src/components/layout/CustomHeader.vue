<template>
    <header>
        <label for="search">
            <input id="search" placeholder="search for recipes">
        </label>
    </header>
</template>

<script>
    export default {
        name: 'CustomHeader',
    };
</script>

<style lang="scss" scoped>
    header {
        background-color: #2DB396;
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    input {
        width: 100%;
        padding: 1rem 2rem;
        font-size: 2rem;
        border: none;
        border-radius: 2rem;
        box-sizing: border-box;

        &:hover {
           cursor: text;
        }
    }
</style>
