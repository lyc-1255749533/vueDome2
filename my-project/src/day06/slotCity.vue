<template>
    <div>
        <h1>城市组件</h1>
        <slotA>
         <p><svg t="1574739230047" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1345" width="30" height="30"><path d="M460.8 25.6c240.3584 0 435.2 194.8416 435.2 435.2 0 108.288-39.5264 207.3088-104.96 283.4688l167.936 167.9104a51.2 51.2 0 1 1-72.3968 72.3968l-170.9568-170.9312A433.2288 433.2288 0 0 1 460.8 896C220.4416 896 25.6 701.1584 25.6 460.8S220.4416 25.6 460.8 25.6z m0 102.4C276.992 128 128 276.992 128 460.8s148.992 332.8 332.8 332.8 332.8-148.992 332.8-332.8S644.608 128 460.8 128z" p-id="1346"></path></svg></p> 
        </slotA>
    </div>
</template>

<script>
import slotA from './slotA'
export default {
    components:{
        slotA
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>

</style>