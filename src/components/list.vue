<template>
  <div>
    <ul class="mdui-list">
      <li
        class="mdui-list-item mdui-ripple mdui-hoverable"
        v-for="(item,i) in list"
        :key="i+1"
        :mdui-tooltip="{content: item.time}"
        @click="handleClick(item)"
      >
        <div class="mdui-list-item-content mdui-text-truncate" v-html="item.title"></div>
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
      list: [
        {
          title: '1111asdadsasdasdasdadasdasdadadasdasd',
          time: '2020-5-24',
          content: '<h1>hahah</h1>hahah'
        },
        {
          title:
            '2222sdasdasdsd2222sdasdasdsd2222sdasdasdsd2222sdasdasdsd2222sdasdasdsd2222sdasdasdsd2222sdasdasdsd',
          time: '2020-3-24',
          content: '2222222'
        },
        {
          title: '33333333333333333333333333333333',
          time: '2020-3-24',
          content: 'h333333ahah'
        }
      ]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$api.allDocsApi().then(res => {
        console.log('🐛:: mounted -> res', res)
        this.list = res
        if (res.length) {
          this.$emit('click', res['0'])
        }
      })
    },
    handleClick(item) {
      this.$emit('click', item)
    },
    del(item) {
      this.$api.removeApi(item['_id']).then(res => {
        console.log(res)
        this.utools.showNotification('Hi, uTools')
      })
    }
  }
}
</script>

<style scoped>
</style>