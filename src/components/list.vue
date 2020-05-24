<template>
  <div>
    <ul class="mdui-list">
      <li
        class="mdui-list-item mdui-ripple mdui-hoverable"
        v-for="(item,i) in list"
        :key="i+1"
        :mdui-tooltip="item.time"
        @click="handleClick(item)"
      >
        <div class="mdui-list-item-content mdui-text-truncate" >{{item.title}}</div>
        <i class="mdui-list-item-icon mdui-icon material-icons" @click="del(item)">delete</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      activated: '1',
      list: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$api.allDocsApi().then(res => {
        this.list = res
        if (res.length) {
          res.map(item=>{
            let day = this.$api.toLocaleString(item.time)
            item.time={content:day}
          })
          this.$emit('click', res['0'])
        }
      })
    },
    handleClick(item) {
      this.$emit('click', item)
    },
    del(item) {
      this.$api.removeApi(item['_id']).then(() => {
        this.utools.showNotification('删除成功')
        this.getData()
      })
    }
  }
}
</script>

<style scoped>
</style>