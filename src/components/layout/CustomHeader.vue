<template>
    <header>
        <div class="container">
            <input id="search" placeholder="search for recipes">
        </div>
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
        width: 100vw;
        height: 10rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    input {
        max-width: 100%;
        padding: 1rem 2rem;
        font-size: 2rem;
        border: none;
        border-radius: 2rem;

        &:hover {
            cursor: text;
        }
    }
</style>
