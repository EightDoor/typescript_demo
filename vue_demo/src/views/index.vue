<template>
  <ul class="content">
    <li @click="change(item.path)" v-for="(item, index) in list" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

interface ListType {
  title: string;
  path: string;
}
const router = useRouter();
const list = ref<ListType[]>([
  {
    title: "多个v-model绑定",
    path: "/more_vmodel",
  },
  {
    title: "插槽",
    path: "/slot",
  },
  {
    title: "provide,inject使用",
    path: "/provide_inject",
  },
]);

function change(val: string) {
  router.push(val);
}
</script>
<style lang="less" scoped>
.content {
  li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 15px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
