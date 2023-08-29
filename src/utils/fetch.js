import axios from "axios";

const base = axios.create({baseURL:'https://pokeapi.co/api/v2/'})

export const fetch = () => {
    return base;
}