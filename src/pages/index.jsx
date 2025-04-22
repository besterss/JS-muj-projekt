import { render } from '@czechitas/render';
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
      <p>Czechitas, nová patička</p>
    </footer>
  );
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Moje super stránka z druhé lekce</h1>
      <br /> 
      <Odkazy />
    </header>
    <main>
      <p>Moje naklonovaná stránka.</p>
    </main>
    <Footer />
  </div>
);
