<template>
  <div class="home">
    <div id="foo">hello vue.js</div>
    <a-button type="primary" class="btn" @click='click'>点击发送get请求</a-button>
    <p>{{data}}</p>
    <a-button type="primary" class="btn" @click='click2'>点击发送post请求</a-button>
    <p>{{data2}}</p>
    <a-button type="primary" class="btn" @click='click3'>点击发送put请求</a-button>
    <p>{{data3}}</p>
    <a-button type="primary" class="btn" @click='click4'>点击发送get请求(传递参数)</a-button>
    <p>{{data4}}</p>
    <a-button type="primary" class="btn" @click='click5'>点击发送get并发</a-button>
    <p>{{data5}}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      data: '',
      data2: '',
      data3:'',
      data4: '',
      data5: ''
    }
  },
  methods: {
    click() {
      this.$my_get({
          url:'/get'
        }).then(res =>{
        this.data = JSON.stringify(res)
		  })
    },
    click2() {
      this.$my_post({
          url:'/post'
        }).then(res =>{
        this.data2 = JSON.stringify(res)
		  })
    },
    click3() {
      this.$my_put({
          url:'/put'
        }).then(res =>{
        this.data3 = JSON.stringify(res)
		  })
    },
    click4() {
      this.$my_http({
          url:'/home/data',
          params:{type: 'pop',page: 1}
        }).then(res =>{
        this.data4 = JSON.stringify(res)
		  })
    },
    click5() {
      this.$my_all([
        this.$my_get({
          url:'home/data',
          params:{type:'pop',page:1}
        }),
        this.$my_get({
          url:'home/data',
          params:{type:'pop',page:2}
        })
      ]).then(res => {
        console.log(res[0],res[1])
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#foo {
  background-color: red;
}
</style>
