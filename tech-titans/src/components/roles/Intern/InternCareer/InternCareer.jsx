import {Link} from "react-router-dom";

const InternCareer = () => {
  return (
      <section>
          <ul>
            <li><Link to={'https://talent.mos.ru/'} target={'_blank'}>Карьерный портал правительства Москвы</Link> </li>
            <li><Link to={'https://mguu.ru/'} target={'_blank'}>Университет Правительства Москвы</Link> </li>
            <li><Link to={'https://t.me/ugskpm'} target={'_blank'}>Teleram</Link> </li>
          </ul>
      </section>
  );
}
export default InternCareer;