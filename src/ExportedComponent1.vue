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
import { defineComponent } from "vue";
import Add from "./components/Add.vue";

export default defineComponent({
  name: "ExportedComponent1",
  components: {
    Add
  },
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
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
