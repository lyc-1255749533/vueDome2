<template>
    <div>
        <button @click="acc">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            n:0
        }
    },
    methods: {
        acc(){
            this.$emit('acc')
        }
    },
}
</script>

<style scoped>

</style>