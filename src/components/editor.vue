<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      style="height:400px"
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
  props: ['msg'],
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
        let data = {
          content: this.content,
          title: el.container.textContent,
          time: new Date().getTime()
        }
        this.$emit('getList', data)
      }
      // 失去焦点事件
    },
    onEditorFocus() {
      // 获得焦点事件
    },
    onEditorChange(el) {
       if (this.content) {
        let data = {
          content: this.content,
          title: el.container.textContent,
          time: new Date().getTime()
        }
        this.$emit('onEditorChange', data)
      }
    }
  }
}
</script>
