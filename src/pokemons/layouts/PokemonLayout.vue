<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import  { pokemonRoute } from '@/pokemons/router/index';
import type { RouterLink } from '@/router/list-routes';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props}) => {

  const { title, visible } = props as  { title: string, visible: boolean };

  return {
    name: name?.toString() ?? '',
    path: path,
    title: title,
    visible: visible
  }
}) || [];


</script>
<template>
  <div>
    <NavBar  
      nav-secondary
      :links="routeLinks"
    />
    <!-- <h1>Pokemon Layout</h1> -->
    <RouterView />
  </div>
</template>
<style scoped>

</style>