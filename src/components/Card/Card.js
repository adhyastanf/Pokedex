import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Card = ({ img, number, name }) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const data = useFetch(URL);
  const { types } = data;

  const colors = (name) => {
    const color = {
      rock: '#b69e31',
      ghost: '#70559b',
      steel: '#b7b9d0',
      water: '#6493eb',
      grass: '#74cb48',
      psychic: '#fb5584',
      ice: '#9ad6df',
      dark: '#75574c',
      fairy: '#e69eac',
      fighting: '#c12239',
      flying: '#a891ec',
      poison: '#a43e9e',
      ground: '#dec16b',
      bug: '#a7b723',
      fire: '#f57d31',
      electric: '#f9cf30',
      dragon: '#7037ff',
    };

    if (color[name]) {
      return color[name];
    }

    return '#74cb48';
  };

  return (
    <>
      {types && (
        <Link to={'details/' + number} style={{ textDecoration: 'none' }}>
          <section className={styles.card} style={{ backgroundColor: colors(types[0].type.name), borderColor: colors(types[0].type.name)}}>
            <div>
              <p>{number < 10 ? `#00${number}`:number >= 100?`#${number}`:`#0${number}`}</p>
            </div>
            <div className={styles.figure}>
              <img src={img} alt='' width={'72px'} height={'72px'} draggable='false' />
            </div>
            <div>
              <p>{name}</p>
            </div>
          </section>
        </Link>
      )}
    </>
  );
};

Card.defaultProps = {
  img: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg',
  number: 1,
  name: 'Bulbasaur',
};
