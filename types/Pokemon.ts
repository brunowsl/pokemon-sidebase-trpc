export type Pokemon = {
    id: number
    order: number
    name: string
    height: number
    weight: number
    is_default: boolean
    types: PokemonType[]
    color: string
    sprites: PokemonSprite
}

type PokemonType = {
    name: string
    type: Type
}

type Type = {
    name: string
}

type PokemonSprite = {
    front_default: string
}

