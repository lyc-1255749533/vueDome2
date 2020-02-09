<template>
    <div>
        <!-- <input type="text" v-focus> -->
        <!-- <div v-demo:100></div> -->
        <ul>
            <li v-change="20">新闻</li>
            <li v-change="30">热门</li>
            <li v-change="40">历史</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    directives:{ //自定义指令
        focus:{ // 指令名称
        
            inserted:function(el){ //当使用该指令的元素被插入到父元素时调用此函数
               console.log(el)
               el.style.width = '600px';
               el.value = 'hello'
               el.focus();
            },
            bind(){
                console.log('指令被绑定')   //  第一次绑定该指令 可以初始化一些数据
            },
            undate(){
                console.log('组件更新')   //使用指令的元素产生了变化
            }
        },
        demo:{
                bind: function (el, binding, vnode) {
                var s = JSON.stringify
                el.innerHTML =
                'name: '       + s(binding.name) + '<br>' +
                'value: '      + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: '   + s(binding.arg) + '<br>' +
                'modifiers: '  + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
            }
        },
        change:{

            bind:function(el,binding){
                el.onclick=function(){
                    el.style.fontSize = binding.value+'px';
                }
                
            }
        }
        
    }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
ul{
    background: pink;
}
ul>li{
    /* background: skyblue; */
    font-size: 14px;
    border: 1px solid skyblue;
}
</style>