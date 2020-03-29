<template>
    <div class="button">
        <div class="circle"></div>
        <a>{{text}}</a>
    </div>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: {
            text: {
                type: String,
                required: true,
            },
        },
    };
</script>


<style lang="scss" scoped>
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        padding: 1rem 3rem;
        background-color: #2DB396;
        color: #fff;
        font-size: 1.8em;
        font-weight: bold;
        text-transform: capitalize;
        text-decoration: none;
        transition: all .2s ease-Out;

        &:hover {
            color: #071E22;
            cursor: pointer;
            transform: translateY(-2px);
            box-shadow: rgba(0, 0, 0, 0.13) 3px 3px 3px ;
        }

        &:active {
            transform: translateY(0px);
            box-shadow: none;
        }

        &:hover .circle {
            width: 200%;
            height: 500%;
            opacity: 1;
            top: -7rem;
            left: -7rem;
        }

        a {
            z-index: 1;
        }
    }

    .circle {
        width: 0;
        height: 0;
        opacity: 0;
        border-radius: 50%;
        background: #FF6F59;
        position: absolute;
        transition: all .4s ease-Out;
        top: 2rem;
        left: 7rem;
    }

</style>
