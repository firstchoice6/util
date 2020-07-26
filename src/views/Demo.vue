<template>
  <div id="demo">
    <h3>按钮</h3>

    <div class="common">
      <h4>普通按钮</h4>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary">按钮</a-button>
      </a-config-provider>
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>
    </div>
    <div class="common">
      <h4>Basic</h4>
      <a-button-group>
        <a-button>Cancel</a-button>
        <a-button type="primary">OK</a-button>
      </a-button-group>
      <a-button-group>
        <a-button disabled>L</a-button>
        <a-button disabled>M</a-button>
        <a-button disabled>R</a-button>
      </a-button-group>
      <a-button-group>
        <a-button type="primary">L</a-button>
        <a-button>M</a-button>
        <a-button>M</a-button>
        <a-button type="dashed">R</a-button>
      </a-button-group>

      <h4>With Icon</h4>
      <a-button-group>
        <a-button type="primary">
          <a-icon type="left" />Go back
        </a-button>
        <a-button type="primary">
          Go forward
          <a-icon type="right" />
        </a-button>
      </a-button-group>
      <a-button-group>
        <a-button type="primary" icon="cloud" />
        <a-button type="primary" icon="cloud-download" />
      </a-button-group>
    </div>
    <div class="common">
      <a-button type="primary" block>Primary</a-button>
      <a-button block>Default</a-button>
      <a-button type="dashed" block>Dashed</a-button>
      <a-button type="danger" block>Danger</a-button>
      <a-button type="link" block>Link</a-button>
    </div>

    <h3>icon</h3>
    <a-icon class="icon" type="qq" />
    <a-icon class="icon" type="gitlab" />
    <h2>---------------------------------------------------------</h2>
    <a-row>
      <a-col :span="4" class="col">这是左边</a-col>
      <a-col :span="4">这是中间</a-col>
      <a-col :span="4" class="col">这是右边</a-col>
      <a-col :span="4">这是左边</a-col>
      <a-col :span="4" class="col">这是中间</a-col>
      <a-col :span="4">这是右边</a-col>
    </a-row>

    <h2>Align Top</h2>
    <a-row type="flex" justify="space-around" align="top">
      <a-col :span="4" class="flex">
        <div class="height-100">col-4</div>
      </a-col>
      <a-col :span="4" class="flex">
        <div class="height-50">col-4</div>
      </a-col>
      <a-col :span="4" class="flex">
        <div class="height-120">col-4</div>
      </a-col>
      <a-col :span="4" class="flex">
        <div class="height-80">col-4</div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Demo",
};
</script>

<style>
.common {
  border: 1px solid #000;
  margin-bottom: 10px;
}
.icon {
  margin-right: 6px;
  color: red;
  font-size: 50px;
}
.col {
  background-color: rgb(2, 243, 143);
}
a-col {
  display: block;
  height: 20px;
}
.flex {
  background-color: #cc6;
}
</style>