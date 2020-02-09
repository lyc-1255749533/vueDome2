export default  {
    namespaced:true,
    state:{   //声明数据
        n:'hello',
        login:false,
        uname:'',
        psw:''
    },
    mutations:{  //改变state数据的方法  ,不能写异步
        add(state,val){
            state.n += val;
        },
        ass(state,val){  //计算属性
            state.n -= val;
        },
        login(state,val){
            console.log(val)
            state.login = true;
            state.uname = val[0];
            state.psw = val[1];
        }
    },
    getters:{
        upperCase(state){
            return state.n.toLocaleUpperCase();
        }
    },
    actions:{  //用来改变state数据的方法，和mutations不用的是，actions是异步的
        loginSync(context,val){
            console.log(val)
            //处理登录  调用接口  成功之后把login的值修改  获得返回值
            context.commit('login',val);
        }
    }
}

