<template>
  <div class="greetings-header">
    {{ greetings }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExportedComponent2",
  data() {
    return {
      greetings: "Hello world"
    };
  },
  mounted() {}
});
</script>

<style lang="scss" scoped>
@import "./assets/colors";
.greetings-header {
  color: $blue;
}
</style>
