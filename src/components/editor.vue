<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      style="height:400px;background-color: #fff;"
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
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], //引用，代码块

            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: 'ordered' }, { list: 'bullet' }], //列表
            [{ script: 'sub' }, { script: 'super' }], // 上下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            [{ direction: 'rtl' }], // 文本方向

            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题

            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式

            ['clean'] //清除字体样式
            // ['image', 'video'] //上传图片、上传视频
          ]
        },
        theme: 'snow'
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {},
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
      console.log('🐛:: onEditorReady -> editor', editor)
      // this.$refs['myQuillEditor'].quill.keyboard.addBinding({ key: 'B' ,shortKey: true }, this.keyBindFn)
    },
    keyBindFn() {
      // let vm = this;
      // console.log('1 :', 1);
    },
    onEditorBlur(el) {
      console.log('🐛:: onEditorBlur -> el', el)
      // if (this.content) {
      //   let data = {
      //     content: this.content,
      //     title: el.container.textContent,
      //     time: new Date().getTime()
      //   }
      //   this.$emit('onEditorSave', data)
      // }
      // 失去焦点事件
    },
    onEditorFocus() {
      // 获得焦点事件
      this.$emit('onEditorFocus', false)
    },
    onEditorChange(el) {
      console.log('🐛:: onEditorChange -> el', el)
      if (el.text) {
        this.content = el.html
        let data = {
          content: el.html,
          title: el.text,
          time: new Date().getTime()
        }
        this.$emit('onEditorChange', data)
      }
    }
  }
}
</script>
