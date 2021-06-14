<template>
  <div>
    <h1>通过mutation修改state输入</h1>
    <div>token值: {{ token }}</div>
    <input type="text" v-model="input">
    <button @click="submit">更新</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FlexTest',
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    ...mapMutations(['setToken']),
    submit () {
      this.setToken({
        token: this.input
      })
    }
  }
}
</script>
<style scoped>
</style>
