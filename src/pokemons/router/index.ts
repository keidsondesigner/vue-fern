import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = "pokemons";

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`, //redirecionamento, para rota padrão ao entrar no modulo pokemons

  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/by/:id`,
      // title n existe dentro do "RouteRecordRaw" por isso passado no Props
      props: { title: 'Pókemon por Id' },
      name: 'pokemon-id',
      component: () => import('@/pokemons/views/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/list`,
      props: { title: 'Lista Pókemons' },
      name: 'pokemon-list',
      component: () => import('@/pokemons/views/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      props: { title: 'Pesquisar Pókemon' },
      name: 'pokemon-search',
      component: () => import('@/pokemons/views/PokemonSearch.vue'),
    }
  ]
}