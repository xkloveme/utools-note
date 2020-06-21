<template>
  <div class="title">
    <van-nav-bar :title="time">
      <template #left >
        <van-icon @click="handleList()" name="wap-nav" size="2rem" color="#2c3e50"/>
        <h2 @click="handleList()">笔记</h2>
      </template>
      <template #right>
        <a @click="saveData()" lass="title-icon" title="保存笔记">
          <svg
            t="1592729878266"
            fill="#2c3e50"
            class="icon"
            viewBox="0 0 1272 900"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1978"
            width="35"
            height="50"
          >
            <path
              d="M840.551896 953.357365H129.988813c-1.59105-0.63642-3.182101-1.27284-4.932256-1.591051-41.208204-7.318832-96.258546-54.891237-110.259789-94.349285-2.386576-6.682411-3.659416-14.001243-5.409571-21.001864V123.147296c0.63642-1.59105 1.431945-3.182101 1.750155-4.932256C19.569919 72.870106 74.302051 16.865134 118.374145 4.932256c3.818521-0.95463 7.796147-1.90926 11.773773-2.863891h632.442511c-46.935985-10.341827 159.900559 16.865134 200.472343 199.199503v635.147297c-0.63642 1.59105-1.27284 3.182101-1.59105 4.932256-8.432567 45.344935-65.073959 97.372281-109.146054 109.305158-3.977626 0.95463-7.955252 1.90926-11.773772 2.704786zM485.270354 831.323804h311.209447c25.934121 0 39.617154-13.683033 39.617154-39.458049V547.162213c0-25.775016-13.842138-39.776259-39.298944-39.776259H173.583592c-25.138595 0-39.139838 14.001243-39.139838 38.980733v245.658173c0 4.136731 0.159105 8.273462 0.95463 12.251088 4.136731 17.819764 17.501554 27.047856 38.662523 27.047856 101.827222 0.159105 209.54133 0 311.209447 0z m-17.501554-447.085146h199.835923c27.843381 0 41.367309-13.523928 41.367309-41.367309v-173.424488c0-28.161591-13.205718-41.367309-41.208204-41.367308h-429.583592c-27.525171 0-40.889994 13.364823-40.889994 40.730888V343.030454c0 27.366066 13.523928 41.049099 40.889994 41.049099 72.551896 0.159105 157.036669 0.159105 229.588564 0.159105z m49.640771-194.744562h125.056557v129.034182h-125.056557V189.494096z m0 0"
              p-id="1979"
            />
          </svg>
        </a>
        <a class="title-icon" @click="handleAdd()" title="添加笔记">
          <van-icon name="plus" color="#2c3e50" />
        </a>
        <a
          style="padding:0 1rem;"
          @click="open('https://github.com/xkloveme/utools-note')"
          title="地址"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 36 36"
            enable-background="new 0 0 36 36"
            xml:space="preserve"
            class="mdui-icon"
            style="width: 30px;height:30px;"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#2c3e50"
              d="M18,1.4C9,1.4,1.7,8.7,1.7,17.7c0,7.2,4.7,13.3,11.1,15.5
	c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1
	c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4
	c-0.2-0.4-0.7-2.1,0.2-4.3c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7
	c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5
	c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C34.3,8.7,27,1.4,18,1.4z"
            />
          </svg>
        </a>
        <a
          class="title-icon"
          @click="open('https://github.com/xkloveme/utools-note/issues')"
          title="反馈"
        >
          <van-icon name="chat" color="#2c3e50" />
        </a>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: this.$api.toLocaleString(new Date())
    }
  },
  mounted() {
    let self = this
    setInterval(function() {
      self.time = self.$api.toLocaleString(new Date())
    }, 1000)
  },
  methods: {
    open(url) {
      window.openExternal(url)
    },
    saveData() {
      this.$emit('saveData')
    },
    handleAdd() {
      this.$emit('handleAdd')
    },
    handleList(){
      this.$emit('handleList')
    }
  }
}
</script>

<style scoped>
.title-icon {
  padding: 0 1rem;
  color: #000;
  font-size: 32px;
  height: 40px;
}
</style>