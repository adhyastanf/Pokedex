import styles from './styles.module.css';
import { Card } from '../../components/Card/Card';
import logo from '../../assets/pokeball.svg';
import sortSVG from '../../assets/sort.svg';
import sort2SVG from '../../assets/sort2.svg';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon } from './actions';

export default function Home() {
  const [value, setValue] = useState('');
  const [sort, setSort] = useState(false)
  const dispatch = useDispatch();
  const { dataPokemon: data, isLoading } = useSelector((state) => state.homeReducer);
  
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  
  const sorting = (a,b) => {
    if(sort){
      if(a.name < b.name){
        return -1;
      }else if(a.name > b.name){
        return 1;
      }
      return 0;
    }else{
      return data;
    }
  }
  return (
    <div className={styles.container}>
      <Nav setValue={setValue} setSort={setSort} sort={sort}/>
      <section>
        {!isLoading ? (
          <>
            {[...data]?.sort(sorting).filter(data => data.name.includes(value) && data.name.startsWith(value)).map((data, idx) => {
              let id = data.url.split("/")
              let number = id[id.length - 2]
              let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${number}.gif`;
              return (
                <div key={idx}>
                  <Card name={data.name} number={number} img={url}   />
                </div>
              );
            })}
          </>
        ) : (
          <p>loading...</p>
        )}
      </section>
    </div>
  );
}

const Nav = ({setValue, setSort, sort}) => {
  return (
    <section className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <img src={logo} alt='logo' />
          <h2>Pokedex</h2>
        </div>
        <div></div>
        <div onClick={() => setSort(!sort)}>
          <img src={sort?sortSVG:sort2SVG} alt='' />
        </div>
      </nav>
      <div>
        <input type='text' placeholder='Procurar' onChange={e => setValue(e.target.value)} />
      </div>
    </section>
  );
};
