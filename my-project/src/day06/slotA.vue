<template>
    <div>
        <ul>
            <li>城市</li>
            <li>城市</li>
            <li>城市</li>
            <li>城市</li>
            <li>城市</li>
        </ul>
        <slot></slot>
        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
}
ul{
    background: pink;
}
</style>