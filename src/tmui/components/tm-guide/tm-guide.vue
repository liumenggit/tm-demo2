<template>
  <view>
    <tm-text label="租一间"></tm-text>
  </view>
</template>
<script lang="ts" setup>
import {
  getCurrentInstance,
  computed,
  ref,
  ComponentInternalInstance,
  inject,
  onUpdated,
  onMounted,
  onUnmounted,
  nextTick,
  watch,
  ssrContextKey,
} from "vue";

const proxy = getCurrentInstance()?.proxy ?? null;
let parent: any = proxy?.$parent;
console.log('parent',parent)
// while (parent) {
//   if (parent?.tmFormComnameId == "tmFormId" || !parent) {
//     break;
//   } else {
//     parent = parent?.$parent ?? undefined;
//   }
// }

function startGuide() {
  console.log('startGuide',parent)
  getReactInfo()
  return 21313
}

// 获取元素的信息
function getReactInfo() {
  return new Promise((resolve, reject) => {
    const query = uni.createSelectorQuery().in(parent);
    query.select("#jintian").boundingClientRect((result) => {
      console.log('result', result)
      if (result) {
        resolve(result);
      } else {
        reject();
      }
    }).exec();
  })
}

defineExpose({startGuide});
</script>