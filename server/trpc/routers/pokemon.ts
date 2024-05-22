import {protectedProcedure, router} from '~/server/trpc/trpc';
import {Pokemon} from "~/types/Pokemon";

export const pokemonRouter = router({
    fetchPokemon: protectedProcedure.query(async ({ctx}) => {

        const random = Math.floor(Math.random() * 500)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        const pokemon = await response.json() as Pokemon

        await ctx.prisma.pokemon.create({
            data: {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                height: pokemon.height,
                weight: pokemon.weight,
                order: pokemon.order,
                is_default: pokemon.is_default
            }
        })


        return pokemon
    }),

    fetchPokemonSalvos: protectedProcedure.query(async ({ctx}) => {
        return await ctx.prisma.pokemon.findMany({
            orderBy: {
                created_at: "desc"
            },
            take: 10
        })

    })
})
