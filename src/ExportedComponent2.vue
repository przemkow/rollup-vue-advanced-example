<template>
  <div class="greetings-header">
    {{ greetings }}
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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

<style lang="scss">
@import "./assets/shared";
</style>
