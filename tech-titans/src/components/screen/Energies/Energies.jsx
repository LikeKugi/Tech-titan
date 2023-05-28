import './energies.css'
import {useEffect, useReducer, useState} from "react";

const Energies = (props) => {
  const {min, max} = props;
  const [energiesLvl, setEnergiesLvl] = useState(min);

  const [show, toggle] = useReducer(show => !show, false);

  useEffect(() => {
    const ht = Math.floor(Math.random() * (max - min) + min);
    setEnergiesLvl(ht)
  }, [min, max])

  return (
      <>
      <div className="energy">
        <button className="energy__toggle" onClick={toggle}>Уровень энергии</button>
      </div>
        {show && <aside className='energies'>
          <p>Энергия</p>
          <div className='energies__wrapper'>
            <div className='energies__level'
                 style={{height: energiesLvl + '%',}}></div>
          </div>
          <p>Уровень: {energiesLvl}%</p>
        </aside>}
      </>
  );
}
export default Energies;