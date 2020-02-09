<template>
    <div>
        <button @click="add">+</button>
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
        add(){
            this.$emit('add');
        }
    },
}
</script>

<style scoped>

</style>