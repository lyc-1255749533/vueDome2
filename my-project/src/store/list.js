export default {
  // namespaced:true,
  state: { //声明数据
    arr: []
  },
  mutations: { //改变state数据的方法，不能写异步
    go(state, val) {
      console.log(state.arr)
      if (state.arr.length == 0) {
        state.arr.push(val);
      } else {
        var bool = true;
        state.arr.forEach((item) => {
          if (item.id == val.id) {
            item.inp++;
            bool = false;
          }
        })
        if (bool == true) {
          state.arr.push(val)
        }
      }
    },
    add(state, index) {
      var ass = state.arr.slice(0);
      ass[index].inp++;
      state.arr = ass

    },
    jian(state, index) {
      var ass = state.arr.slice(0);
      ass[index].inp--;
      if (ass[index].inp < 1) {
        ass[index].inp = 1
      }
      state.arr = ass
    },
    chec(state, index) {
      var ass = state.arr.slice(0);
      if (ass[index].check == true) {
        ass[index].check = false;
      } else {
        ass[index].check = true;
      }
      state.arr = ass;
    },
    checkAll(state, check) {
      var ass = state.arr.slice(0);
      if (check == false) {
        ass.forEach((item) => {
          item.check = true
        })
      } else {
        ass.forEach((item) => {
          item.check = false
        })
      }
      state.arr = ass;
    }

  },
  getters: {
    getZ(state) {
      console.log(state.arr)
      var ass = state.arr.filter((item) => {
        return item.check == true
      })
      var sum = 0;
      ass.forEach(item => {
        sum += item.inp * item.p2
        console.log(sum)
      });
      return sum
    },
    getHe(state) {
      // 找到 被勾选的商品 并计算他们的总和
      var ass = state.arr.filter((item) => {
        return item.check == true
      })
      return ass.length;
    }

  }


}
