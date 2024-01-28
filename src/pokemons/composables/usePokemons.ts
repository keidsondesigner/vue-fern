import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "../helpers/get-pokemon";


export const usePokemons = () => {


  const { isLoading, data: pokemons, isError, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
  });
    

  return {
    // Properties
    pokemons,
    isLoading,
    isError,
    error,

    // Computed
    count: computed(() => pokemons.value?.length ?? 0 ),
  }
}