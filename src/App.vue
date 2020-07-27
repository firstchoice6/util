<template>
  <a-layout class="base-layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">航天驭星</div>
      <a-menu class="left-menu" theme="dark" mode="inline" :default-selected-keys="['0']">
        <a-menu-item key="0">
          
          <span>
            <router-link to="/" tag="div"><a-icon type="upload" />校友合作</router-link>
          </span>
        </a-menu-item>
        <a-sub-menu key="1">
          <span slot="title">
            
            <span>
              <router-link to="/about" tag="div"><a-icon type="mail" />信息管理</router-link>
            </span>
          </span>
          <a-menu-item key="1-1">信息管理1</a-menu-item>
          <a-menu-item key="1-2">信息管理2</a-menu-item>
          <a-menu-item key="1-3">信息管理3</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <span slot="title">
            
            <span>
              <router-link to="/about" tag="div"><a-icon type="mail" />人员管理</router-link>
            </span>
          </span>
          <a-menu-item key="2-1">人员管理1</a-menu-item>
          <a-menu-item key="2-2">人员管理2</a-menu-item>
          <a-menu-item key="2-3">人员管理3</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>投稿管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="flex j-s" style="background: #fff; padding: 0">
        <!-- 下拉登出 -->
        <a-dropdown class="float-right">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-icon type="user" />user
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">
                <a-icon type="lock" />修改密码
              </a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">
                <a-icon type="logout" />注销账号
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
/*自定义滚动条样式


*/
.base-layout {
  height: 100vh;
  .left-menu {
    overflow-y: auto;
    height: calc(100vh - 64px);
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    font: {
      size: 18px;
      weight: bold;
      family: 楷体;
    }
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .float-right {
    float: right;
    margin-right: 100px;
  }
}
</style>
