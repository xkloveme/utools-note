<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      style="height:500px"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>
<script>
export default {
  name: 'App',
  props: ['msg', 'id'],
  data() {
    return {
      content: this.msg,
      editorOption: {}
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
      console.log('🐛:: onEditorReady -> editor', editor)
    },
    onEditorBlur(el) {
      if (this.content) {
        this.$api.putApi({
          _id: this.id,
          content: this.content,
          title: el.container.textContent,
          time: new Date().getTime()
        }).then(()=>{
          this.utools.showNotification('保存成功')
        })
        this.$emit('getList')
      }
      // 失去焦点事件
    },
    onEditorFocus() {
      // 获得焦点事件
    },
    onEditorChange() {
      // 内容改变事件
    }
  }
}
</script>
