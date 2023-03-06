<script setup>
    import { defineProps } from 'vue'

    const props = defineProps([ 'i', 'contract' ])

    function onClick() {
        props.contract.vote(props.i)
    }
</script>

<template>
    <button @click='onClick'>vote {{  i  }}</button>
</template>