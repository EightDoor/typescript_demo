<template>
  <div>slot</div>
  <comm-card title="默认插槽">
    <default-slot>[这个是内容哦]</default-slot>
  </comm-card>
  <comm-card title="具名插槽">
    <named-slot>
      <template #header> 头部</template>
      <template #default> 默认</template>
      <template #footer> 底部</template>
    </named-slot>
  </comm-card>

  <comm-card title="动态插槽名称">
    <dynamic-name-slot>
      <template v-slot:[currentDynamicName]> 动态插槽内容</template>
    </dynamic-name-slot>
    <button @click="switchName">切换名称</button>
    当前的名称为 {{ currentDynamicName }}
  </comm-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import CommCard from "../../components/CommCard.vue";
import DefaultSlot from "./default_slot.vue";
import NamedSlot from "./named_slot.vue";
import DynamicNameSlot from "./dynamic_name_slot.vue";

const dynamic1 = "header";
const dynamic2 = "footer";
const currentDynamicName = ref(dynamic1);

function switchName() {
  if (currentDynamicName.value === dynamic1) {
    currentDynamicName.value = dynamic2;
  } else {
    currentDynamicName.value = dynamic1;
  }
}
</script>

<style lang="less" scoped></style>
