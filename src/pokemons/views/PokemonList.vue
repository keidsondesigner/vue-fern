<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';


const { count, pokemons, isLoading } = usePokemons();


</script>
<template>
  <div>
    <h1>Pokemon List - {{ count }}</h1>
    <span v-if="isLoading">Carregando...</span>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
<style scoped>

</style>