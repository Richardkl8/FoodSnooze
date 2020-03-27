<template>
    <h3>
        <slot></slot>
    </h3>
</template>

<script>
    export default {
        name: 'CustomH3',
    };
</script>

<style scoped>
    h3 {
        font-size: 1.6rem;
        color: #071E22;
    }
</style>
