<template>
  <div>
    <h1>vuexdemo3</h1>
    <p>{{username}}</p>
    <p>{{emall}}</p>
    <p>{{psw}}</p>
    <p>{{addmsg}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
        username:state => state.user.username
    }),
    ...mapState(["username", "emall", "psw"]),
    ...mapGetters({
      addmsg: "add"
    })
  }
};
</script>
<style scoped>
</style>