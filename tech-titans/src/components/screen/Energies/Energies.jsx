import './energies.css'
import {useEffect, useState} from "react";
const Energies = (props) => {
  const {min, max} = props;
  const [energiesLvl, setEnergiesLvl] = useState(min);

  useEffect(() => {
    const ht = Math.floor(Math.random() * (max - min) + min);
    setEnergiesLvl(ht)
  }, [min, max])

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