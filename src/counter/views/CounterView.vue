<script setup lang="ts">
import { ref } from 'vue';

// <script lang="ts">
// export default defineComponent({
//   setup() {

//     const counter = ref(5);
    
//     const hendlerIncrementCounter = () => {
//       counter.value++;
//     }

//     onMounted(
//       hendlerIncrementCounter();
//     )

//     return {
//       counter,
//       hendlerIncrementCounter,
//     }
//   }
// });

const counter = ref(5);

const handlerIncrementCounter = () => {
  counter.value++;
}

const handlerDecrementCounter = () => {
  counter.value--;
}

</script>
<template>
  <div>
    <h1>Olá mundo {{ counter }}</h1>
    <button @click="handlerIncrementCounter">+1</button>
    <button @click="handlerDecrementCounter">-1</button>
  </div>
</template>


<style scoped>

</style>