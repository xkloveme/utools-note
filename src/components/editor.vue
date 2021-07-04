<template>
  <div class="content-edit" style="overflow-y: hidden;">
    <van-field
      class="file-title"
      v-model="currentTitle"
      placeholder="请输入标题"
      @input="handleTitleBlur"
    />
    <mavon-editor
      :toolbars="toolbars"
      :ishljs="true"
      v-model="content"
      placeholder="记个笔记"
      @change="onEditorChange"
      @save="onEditorChange"
      class="markdown-wrapper"
      style="min-height:430px;height:80vh;;background-color: #fff;overflow-y: hidden;"
    />
  </div>
</template>

<script>
export default {
  name: 'FileEdit',
  props: {
    title: String,
    msg: String
  },
  data() {
    return {
      currentTitle: this.title,
      content: this.msg,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  methods: {
    handleTitleBlur() {
      this.onEditorChange(this.content)
    },
    onEditorChange(content) {
      console.log('🐛:: onEditorChange -> el', content)
      let data = {
        content: content,
        title: this.currentTitle,
        time: new Date().getTime()
      }
      this.$emit('onEditorChange', data)
    }
  }
}
</script>

<style scoped>
.file-title {
  padding-left: 5px;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  font-weight: 500;
}
</style>
