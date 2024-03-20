<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';


const route = useRoute();

const { id } = route.params;

const { isLoading, pokemon, isError, erroMessage } = usePokemon(id.toString());

</script>

<template>
  <!-- <h1>Pokemon ById {{ id }}</h1> -->
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ erroMessage }}</h1>
  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}

img {
  width: 150px;
  border-radius: 5px ;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}
</style>