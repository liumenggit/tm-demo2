<template>
  <view  v-if="guideState">
    <view @click="guideState=false" class="fulled fulled-height fixed t-0 l-0 zIndex-26"></view>
    <view @click="guideState=false" class="fixed t-0 l-0 shadow-2 zIndex-n20 rect-shadow"
          :style="{width:guideItem.width,height:guideItem.height,top:guideItem.top,left:guideItem.left}">
    </view>
    <view class="absolute t-50 l-50 zIndex-n20" style="width: 10vw;height: 10vw;background-color: red"></view>
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
const _parentComs = getParent();
let guideList = ref([])
let guideState = ref(false)
let guideIndex = ref(0)
let guideItem = ref({
  width: '0px',
  height: '0px',
  left: '0px',
  top: '0px',
})
console.log('proxy组件', _parentComs)

// _parentComs.getReactInfo()

function getParent() {
  //父级方法。
  let parent = proxy.$parent;

  while (parent) {
    if (parent?.parentNameId == "tmWaterfallId" || !parent) {
      break;
    } else {
      parent = parent?.$parent ?? undefined;
    }
  }
  return parent;
}

function startGuide(list, startIndex) {
  guideList = list
  guideIndex = startIndex || 0
  guideState.value = true
  renderGuideElement(guideIndex)

}

function renderGuideElement(index: number) {
  console.log('渲染', guideList[index].queryClass)
  nextTick(() => {
    _parentComs.getReactInfo(guideList[index].queryClass).then(res => {
      console.log('获取到信息', res)
      guideItem.value = {
        width: res.width + 'px',
        height: res.height + 'px',
        left: res.left + 'px',
        top: res.top + 'px'
      }
    })
  });

}

defineExpose({startGuide});
</script>


<style>
.rect-shadow {
  /*position: fixed;*/
  /*border-radius: 12px;*/
  box-shadow: 0 0 0 3000px rgba(0, 0, 0, 0.8);
  /*z-index: 101;*/
  /*left: 0;*/
  /*top: 0;*/
  /*transform: translate(-10rpx, -10rpx);*/
  /*box-sizing: content-box;*/
  /*border: 10rpx solid #717171;*/
}

.rect-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
}
</style>