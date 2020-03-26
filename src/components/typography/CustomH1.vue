<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<script>
    export default {
        name: 'CustomH1',
    };
</script>

<style scoped>
    h1 {
        font-size: 4rem;
        color: #071E22;
    }
</style>
