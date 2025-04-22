import { render } from '@czechitas/render';
import { Header } from '../components/Header';
import { Plysaci } from '../components/Plysaci'

import '../global.css';
import './index.css';
import './super.css';
//import { data } from './seznam.json';

const Odkazy = () => {
  return (
    <ul>
      <li><a href="#">Odkaz 1</a></li>
      <li><a href="#">Odkaz 2</a></li>
      <li><a href="#">Odkaz 3</a></li>
      <li><a href="#">Odkaz 4</a></li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>Czechitas, nová patička upgradovaná</p>
    </footer>
  );
}

/*
const Plysaci = () => {

  const Ctirad = () => {
    const plysakName = "Ctirad"
    const plysakImg = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"
    const plysakText = "Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře."

    return (
      <div class="plushy">
        <img src={plysakImg} />
        <strong>{plysakName}</strong>
        <p>{plysakText}</p>
      </div>
    )
  }

  const Silvestr = () => {
    const plysakName = "Silvestr"
    const plysakImg = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"
    const plysakText = "Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí."

    return (
      <div>
        <img src={plysakImg} />
        <strong>{plysakName}</strong>
        <p>{plysakText}</p>
      </div>
    )
  }

  return (
    <div>
      <Ctirad />
      <Silvestr />
    </div>
  )
}

*/


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header title="Můj titulek stránky" user="Filip Procházka" />

    <main>
      <p>Moje naklonovaná stránka.</p>
      <br />
      <Odkazy />
      <Plysaci />
    </main>
    <Footer />
  </div>
);
