<template>
  <div id="app">
    <div class="component">
      component1:
      <ExportedComponent1
        first-name="hello"
        last-name="vue"
      ></ExportedComponent1>
    </div>
    <div class="component">
      component2:
      <ExportedComponent2></ExportedComponent2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { multiply, ExportedComponent1, ExportedComponent2 } from "../../";

export default Vue.extend({
  name: "App",
  components: {
    ExportedComponent1,
    ExportedComponent2
  },
  mounted() {
    console.log(multiply(2, 5));
  }
});
</script>

<style>
@import "../../dist/styles.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.component {
  border: 2px solid red;
}
</style>
