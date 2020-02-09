export default  {
    namespaced:true,
    state:{   //声明数据
        username:'',
    },
    mutations:{  //改变state数据的方法  ,不能写异步
        login(state,val){
            // console.log(val)
            state.username = val[0];
        }
    },
    getters:{  //类似于计算属性
        
    },
    actions:{  //用来改变state数据的方法，和mutations不用的是，actions是异步的
       
    }
}

