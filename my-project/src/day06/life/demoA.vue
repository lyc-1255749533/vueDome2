<template>
    <div>
        <h2>子组件</h2>
    </div>
</template>

<script>
export default {
    activated() {
        console.log('组件被激活')
    },
    deactivated() {
        console.log('组件被隐藏')
    },
}
</script>

<style scoped>

</style>