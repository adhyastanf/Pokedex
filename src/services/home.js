import { fetch } from "../utils/fetch";

const ACTIONS = {
    getPokemon :() => fetch().get('pokemon?limit=100')
}

export default ACTIONS;
// export const getPokemons = () => fetch().get('pokemon?limit=100')