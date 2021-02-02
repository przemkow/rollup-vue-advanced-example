<template>
  <div :class="$style.sum">
    {{ sum(this.numberA, this.numberB) }}
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "Add",
  props: {
    numberA: {
      type: Number,
      required: true
    } as PropOptions<number>,
    numberB: {
      type: Number,
      required: true
    } as PropOptions<number>
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

<style lang="scss">
@import "../assets/shared";
</style>
