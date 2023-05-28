import './energies.css'
import {useEffect, useReducer, useState} from "react";

const colors = {
  0: '#FF8FF6',
  1: '#FF75F4',
  2: '#FF51F1',
  3: '#FF20ED',
  4: '#FF00EB'
}

const Energies = (props) => {
  const {min, max} = props;
  const [energiesLvl, setEnergiesLvl] = useState(min);
  const [energyColor, setEnergyColor] = useState(0);

  const [show, toggle] = useReducer(show => !show, true);

  useEffect(() => {
    const ht = Math.floor(Math.random() * (max - min) + min);
    setEnergiesLvl(ht)
    findEnergyColor(ht)
  }, [min, max])

  const findEnergyColor = (lvl) => {
    if (lvl < 20) {
      setEnergyColor(0);
    } else if (lvl < 40) {
      setEnergyColor(1);
    } else if (lvl < 60) {
      setEnergyColor(2);
    } else if (lvl < 80) {
      setEnergyColor(3);
    } else {
      setEnergyColor(4);
    }
  }

  return (
      <>
      <div className="energy">
        <button className="energy__toggle" onClick={toggle}>{show? 'Скрыть уровень энергии' : 'Показать уровень энергии'}</button>
      </div>
        {show && <aside className='energies'>
          <p>Энергия</p>
          <div className='energies__wrapper'>
            <div className='energies__level'
                 style={{height: energiesLvl + '%', backgroundColor: colors[energyColor]}}></div>
          </div>
          <p>Уровень: {energiesLvl}%</p>
        </aside>}
      </>
  );
}
export default Energies;