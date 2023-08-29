import styles from './styles.module.css';
import back from '../../assets/back.svg';
import board from '../../assets/board.svg';
import ruler from '../../assets/ruler.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

export default function Details({ img }) {
  const nameStats = ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD'];
  const { id } = useParams();

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
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

  const color = { color: types ? colors(types[0].type.name) : '#74cb48' };
  const { stats } = data;

  return (
    <>
      {types && stats ? (
        <div className={styles.container} style={{ backgroundColor: colors(types[0].type.name) }}>
          <div>
            <Link to={'/'}>
              <img src={back} alt='' />
            </Link>
            <h2 style={{ textTransform: 'capitalize' }}>{data.name}</h2>
            <p style={{'fontSize':'12px'}}>{id < 10 ? `#00${id}` : `#0${id}`}</p>
          </div>
          <section>
            <div>
              <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`} alt='' width='200px' height='200px' />
            </div>
            <section className={styles.content}>
              {types && <Type types={types} color={colors(types[0].type.name)} />}
              <h5 style={color}>About</h5>
              <div className={styles.first}>
                <div>
                  <p>
                    <img src={board} alt='' /> {data.weight}kg
                  </p>
                  <p>Weight</p>
                </div>
                <div style={{ alignSelf: 'stretch', borderLeft: '1px solid green' }}></div>
                <div>
                  <p>
                    <img src={ruler} alt='' /> {data.height}m
                  </p>
                  <p>Height</p>
                </div>
                <div style={{ alignSelf: 'stretch', borderLeft: '1px solid green' }}></div>
                <div>
                  {data.abilities && <p>{data.abilities[0].ability.name}</p>}

                  <p>Moves</p>
                </div>
              </div>
              <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
              <h5 style={color}>Base Stats</h5>
              <div className={styles.boxStats}>
                <div>
                  {nameStats.map((data, idx) => {
                    return (
                      <h6 key={idx} style={color}>
                        {data}
                      </h6>
                    );
                  })}
                </div>
                <div style={{ alignSelf: 'stretch', borderLeft: '1px solid green' }}></div>
                <div>
                  {data.stats.map((data, idx) => {
                    return <p key={idx}>{data.base_stat}</p>;
                  })}
                </div>
                <div className={styles.lastBoxStats}>
                  {data?.stats &&
                    data.stats.map((data, idx) => {
                      return <Stats color={colors(types[0].type.name)} width={stats[idx].base_stat} key={idx} />;
                    })}
                </div>
              </div>
            </section>
          </section>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

const Stats = ({ color, width }) => {
  return (
    <div className={styles.stats} style={{ backgroundColor: color+'7f' }}>
      <div style={{ backgroundColor: color, width: `${width}px` }}></div>
    </div>
  );
};

Details.defaultProps = {
  img: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg',
  number: '#001',
  name: 'Bulbasaur',
};

const Type = ({ types }) => {
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
    <div style={{ display: 'flex', gap: '1rem', textTransform: 'capitalize' }}>
      {types &&
        types.map((data, idx) => {
          return (
            <span key={idx} style={{ backgroundColor: colors(data.type.name), padding: '2px 8px', borderRadius: '10px', color: 'white', lineHeight: '16px', fontWeight: 'bold' }}>
              {data.type.name || 'test'}
            </span>
          );
        })}
    </div>
  );
};
