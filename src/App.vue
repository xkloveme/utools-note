<template>
  <div id="app">
    <Title @handleList="show=true" @saveData="saveData" @handleAdd="handleAdd"></Title>
    <van-popup v-model="show" position="left" :style="{ height: '100%',width:'30%' }">
      <list :id="id" @click="handleClick" ref="list" />
    </van-popup>
    <div>
      <editor
        ref="editor"
        @onEditorFocus="showClass=false"
        @onEditorChange="onEditorChange"
        @onEditorSave="saveData"
        :msg="msg"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import editor from './components/editor.vue'
import Title from './components/title.vue'
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    editor,
    Title,
    list
  },
  data() {
    return {
      id: '',
      rev: '',
      msg: '',
      index: 1,
      showClass: false,
      show: false,
      editData: {}
    }
  },
  mounted() {
    let _this = this
    document.onkeydown = function(e) {
      let _key = window.event.keyCode
      if (_key === 91 && e.ctrlKey) {
        _this.saveData()
      }
    }
  },
  methods: {
    open(url) {
      window.openExternal(url)
    },
    handleAdd() {
      this.index++
      this.id = ''
      this.rev = ''
      this.msg = ''
    },
    handleClick(item) {
      this.index++
      this.msg = item.content
      this.showClass = false
      this.id = item['_id']
      this.rev = item['_rev']
    },
    saveData(data = this.editData, state = true) {
      data['_id'] = this.id
      this.$api.getApi(data['_id']).then(res => {
        data['_rev'] = res['_rev']
        this.$api.putApi(data).then(res => {
          state && this.utools.showNotification('保存成功')
          if (res.ok) {
            this.id = res.id
          }
          this.$refs['list'].getData()
        })
      })
    },
    onEditorChange(data) {
      this.editData = data
      this.saveData(data, false)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
