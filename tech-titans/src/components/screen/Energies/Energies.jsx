import './energies.css'
import {useEffect, useState} from "react";
const Energies = () => {
  const [energiesLvl, setEnergiesLvl] = useState(55);

  useEffect(() => {
    const ht = 55 + Math.floor(Math.random() * 10 * (Math.random() - 0.5));
    setEnergiesLvl(ht)
  }, [])

  return (
      <aside className='energies'>
        <p>Энергия</p>
        <div className='energies__wrapper'>
            <div className='energies__level' style={{height: energiesLvl + '%',}}></div>
        </div>
        <p>Уровень: {energiesLvl}%</p>
      </aside>
  );
}
export default Energies;