<template>
  <div :class="$style.sum">
    {{ sum(numberA, numberB) }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Add",
  props: {
    numberA: {
      type: Number,
      required: true
    },
    numberB: {
      type: Number,
      required: true
    }
  },
  methods: {
    sum(a: number, b: number) {
      return a + b;
    }
  }
});
</script>

<style lang="scss" module>
.sum {
  color: red;
}
</style>
