<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '@/pokemons/helpers/get-pokemon';

import store from '@/store/pokemon.store';
import PokemonCardList from '../components/PokemonCardLits.vue';

// Removendo Composable function usePokemons()
// const { count, pokemons, isLoading, isError, error } = usePokemons();
// e implentando Store no lugar de Composable function usePokemons()

useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
  select(data) {
    store.loadedPokemons(data);
  },
});

</script>

<template>
  <h1 v-if="store.pokemons.isLoading">Loading</h1>

  <div v-else-if="store.pokemons.hasError">
    {{ store.pokemons.errorMessage }}
  </div>

  <div v-else>
    <h1>Pokemon List Store Native - ({{ store.pokemons.count }})</h1>
    
    <PokemonCardList 
      :pokemons="store.pokemons.list"
    />
  </div>

</template>

<style scoped>

</style>@/store/pokemon.store
