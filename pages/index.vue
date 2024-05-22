<script setup lang="ts">
import {useNuxtApp} from "#app";

const session = await useAuth().getSession()

const {$client} = useNuxtApp()

const {data, error} = await $client.pokemon.fetchPokemon.useQuery()
const {data: ultimosPokemons, error: errorUltimosPokemons} = await $client.pokemon.fetchPokemonSalvos.useQuery()

</script>

<template>
  <div class="w-full h-screen flex flex-col bg-blue-100">
    <div class="max-w-full h-[50px] bg-green-500 text-white flex justify-end pr-2">
      <strong>Hello {{ session?.user?.name }}!</strong>
      {{ error }}
    </div>
    <div class="w-full h-[calc(100%-250px)] flex items-center justify-center">
      <div class="w-full h-[500px] flex flex-col items-center justify-center">
        <img :src="data?.sprites.front_default" alt="" class="w-[200px] h-[200px]">
        <span class="accent-red-800">{{ data?.name }}</span>
        <NFlex>
          <NTag v-for="(type, i) in data?.types" :key="i" class="mt-2">{{ type.type.name }}</NTag>
        </NFlex>
      </div>
    </div>
    <div class="w-full h-[240px] fixed bottom-0 flex overflow-x-scroll">
      <div v-for="(pokemon, i) in ultimosPokemons" :key="i"
           class="w-full h-[200px] flex flex-col items-center justify-center">
        <img :src="pokemon?.image" alt="" class="min-w-[200px] h-[200px]">
        <span class="text-blue-900">{{ pokemon?.name }}</span>
        <span class="text-blue-400">{{
            new Date(pokemon?.created_at).toLocaleDateString() + ' ' + new Date(pokemon?.created_at).toLocaleTimeString()
          }}</span>
      </div>
    </div>
  </div>
</template>
