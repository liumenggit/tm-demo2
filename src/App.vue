<template>
</template>
<script lang="ts" setup>
import {onBeforeMount} from "vue"
// #ifdef APP-NVUE || APP-PLUS-NVUE
//customfont为你的base64的ttf字体内容
import {customfont} from "./static/icon/customiconfont";

var domModule = weex.requireModule("dom");
const animation = uni.requireNativePlugin("animation");
// #endif

// #ifdef APP-PLUS-NVUE
console.log('APP-PLUS-NVUE')
onBeforeMount(() => {
  //customfont为你的base64的ttf字体内容
  domModule.addRule("fontFace", {
    fontFamily: "td", //注意这里必须是驼峰命名，跟上面的css样式对照
    src: "url('data:font/ttf;charset=utf-8;base64," + customfont + "')",
  });
});
// #endif
</script>
<style>

/* #ifdef APP-PLUS-NVUE */
@import './tmui/scss/nvue.css';

/* #endif */

/* #ifndef APP-PLUS-NVUE */
@import '@/static/icon/custom.css';
@import './tmui/scss/noNvue.css';

/* #endif */


/* #ifdef H5 */

body::-webkit-scrollbar,
div::-webkit-scrollbar,
*::-webkit-scrollbar {
  display: none;
}

body.pages-index-index uni-page-body,
body {
  padding-bottom: 0 !important;

}

text {
  font-family: "sans-serif";
}

/* #endif */
</style>
