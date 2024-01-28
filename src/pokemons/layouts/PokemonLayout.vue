<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import  { pokemonRoute } from '@/pokemons/router/index';
import type { RouterLink } from '@/router/list-routes';

const routeLinks: RouterLink[] = pokemonRoute.children?.map((link) => {

  return {
    name: link.name?.toString() ?? '',
    path: link.path,
    title: (link.props as  { title: string }).title,
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