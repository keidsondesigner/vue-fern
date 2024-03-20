import { useQuery } from "@tanstack/vue-query"
import { getPokemonById } from "../helpers/get-pokemon-by-id";


export function usePokemon(id: string){

  const { isLoading, data: pokemon, isError, error: erroMessage} = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonById(id),
  });

  return {
    isLoading,
    pokemon,
    isError,
    erroMessage
  }
}