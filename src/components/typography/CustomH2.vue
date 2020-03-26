<template>
    <h2>
        <slot></slot>
    </h2>
</template>

<script>
    export default {
        name: 'CustomH2',
    };
</script>

<style scoped>
    h2 {
        font-size: 2.5rem;
        color: #071E22;
    }
</style>
