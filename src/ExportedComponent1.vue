<template>
  <div class="header">
    {{ fullName }}
    <div>
      Sum of 1 and 2:
      <Add :number-a="1" :number-b="2"></Add>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import Add from "./components/Add.vue";

export default Vue.extend({
  name: "ExportedComponent1",
  components: {
    Add
  },
  props: {
    firstName: {
      type: String,
      required: true
    } as PropOptions<string>,
    lastName: {
      type: String,
      required: true
    } as PropOptions<string>
  },
  computed: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./assets/colors";

.header {
  color: $red;
}
</style>

<style lang="scss">
@import "./assets/shared";
</style>
