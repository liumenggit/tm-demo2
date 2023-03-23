<template>
  <view class="flex flex-col">
    <scroll-view @refresherpulling="pulling" @refresherrestore="tipShow = false" @refresherabort="tipShow=false"
                 @refresherrefresh="pullStart"
                 :refresher-enabled="true"
                 :refresher-threshold="70"
                 :refresher-triggered="Loading" refresher-default-style="none"
                 :scroll-with-animation="true" @scroll="scroll"
                 :scroll-y="true" :style="[
        {
          height:`${props.height}rpx`,
          'overflow-anchor': 'auto',
          width: `${props.width}rpx`,
        },
      ]">

      <tm-sheet :height="40" unit="px" v-if="Loading" :margin="[0, 0]"
                _class="flex flex-col flex-col-center-center">
        <slot name="top" :data="status">
          <tm-icon :color="props.color" :font-size="24" v-if="status === 'loading'" spin
                   name="tmicon-shuaxin"></tm-icon>

          <view @click="reset('pullTop')" v-if="status === 'error'" class="flex flex-row flex-center">
            <tm-icon :userInteractionEnabled="false" color="red" :font-size="24"
                     name="tmicon-times-circle-fill"></tm-icon>
            <tm-text :userInteractionEnabled="false" color="red" :font-size="24" _class="pl-16"
                     label="加载失败,点我重试"></tm-text>
          </view>
        </slot>
      </tm-sheet>
      <tm-text :label="props.tipText" v-if="tipShow"></tm-text>
      <view class="flex flex-col relative">
        <view :style="{ width: `${props.width}rpx` }">
          <slot name="default" :data="props.data"></slot>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup>
import {ref, computed, Ref, PropType, onMounted, ComputedRef} from "vue";
import {scrollDetailFace, statusType} from "./interface";
import tmSheet from "../tm-sheet/tm-sheet.vue";
import tmIcon from "../tm-icon/tm-icon.vue";
import tmText from "../tm-text/tm-text.vue";

const emits = defineEmits(["pullEnd", "pullStart", "status"]);
const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 500,
  },
  topHeight: {
    type: Number,
    default: 0,
  },
  //预估项目的高度，必填。
  itemHeight: {
    type: Number,
    default: 0,
    required: true,
  },
  data: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  //触底结束或者下拉刷新前执行，可以返回Promise<boolean>,真，结束触底操作，假触底加载中
  load: {
    type: [Function, Boolean],
    default: () => true,
  },
  //首次加载渲染时，是否触发加载数据事件。
  firstLoad: {
    type: Boolean,
    default: true,
  },
  tipText: {
    type: String,
    default: '首次提示',
  },
  color: {
    type: String,
    default: "primary",
  },
});
const scrollTop = ref(0);
const Loading = ref(false);
/**
 * never 从未加载过。
 */
const tipShow = ref(false)
const status: Ref<statusType> = ref("never");
const pulling = function (e: any) {
  tipShow.value = true
  console.log('pulling', e.detail.dy)
}
const pullStart = async () => {
  console.log('pullStart')
  if (typeof props.load === "function") {
    if (Loading.value) return;
    Loading.value = true
    status.value = "loading"
    let p = await props.load("top");
    if (typeof p === "function") {
      p = await p("top");
    }
    if (!p) {
      status.value = "error";
      return;
    }
    Loading.value = false;
    status.value = "success";
  }
};
// const pullStart = async (e: any) => {
//   emits("pullStart");
//   if (typeof props.load === "function") {
//     if (Loading.value) return;
//     pullType.value = "top";
//     Loading.value = true;
//     status.value = "loading";
//     let p = await props.load("top");
//     if (typeof p === "function") {
//       p = await p("top");
//     }
//     if (!p) {
//       status.value = "error";
//       return;
//     }
//     Loading.value = false;
//     status.value = "success";
//   }
// };

const reset = function (e: string) {
  Loading.value = false;
  pullStart();
};

onMounted(() => {
  console.log('onMounted')
  if (props.firstLoad) {
    pullStart();
  }
});
</script>