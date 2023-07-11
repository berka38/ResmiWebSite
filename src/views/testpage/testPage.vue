<template>
    <div>
      <h1>deneme</h1>
  
      <ul v-for="i in das">
        <li>{{ i.sender }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, defineComponent } from "vue";
  import data from './deneme.json'
  export default defineComponent({
    name: "testpage",
    setup() {
      const das = ref(data)
  
      return {
        das
      };
    }
  });
  </script>
  