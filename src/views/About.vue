<template>
  <div class="home">
    <div id="bar">hello vue.js</div>
    <a-button type="primary" class="btn" @click="click1">my_fun</a-button>
    <a-button type="primary" class="btn" @click="click2">点击显示toast</a-button>
    <a-button type="primary" class="btn" @click="click3">点击确认信息</a-button>

  </div>
</template>

<script>
export default {
  name: 'About',
  methods:{
    click1() {
      this.$my_fun()
    },
    click2() {
      this.$my_toast('前方高能')
    },
    click3() {
      this.$my_confirm('你确定吗')
    },
  }
}
</script>

<style lang="scss" scoped>
#bar {
  background-color: orange;
}
</style>
