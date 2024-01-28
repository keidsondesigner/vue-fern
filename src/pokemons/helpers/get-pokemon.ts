import axios from 'axios';
import pokemonApi from '../api/pokemonApi';

import type { Pokemon, PokemonListResponse, PokemonResponse } from "../interfaces";

// Filtrando "data" que é o retorno da API, para retornar apenas os dados do tipo "pokemon";
export const getPokemons = async(): Promise<Pokemon[]> => {

  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');

  const pokemonPromises: Promise<Pokemon>[] = [];

  for( const { url } of data.results ) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      }
    });
    pokemonPromises.push(pokemonPromise);
  };

  const pokemons = await Promise.all(pokemonPromises);

  return pokemons;
};