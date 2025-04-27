import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Plysaci } from '../components/Plysaci'

/*
const name1 = 'Silvestr';
const image1 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg';
const text1 =
'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí'
const name2 = 'Ctirad';
const image2 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg';
const text2 =
'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře'


const PlushieSilvestr = () => {
  return(
    <div className = "plushy"> 
      <img className = 'plushy_image' src = {image1} ></img>
      <h2 className='plushy_name'> {name1} </h2>
      <p className='plushy_text'> {text1} </p>
    </div>
  )
}

const PlushieCtirad = () => {
  return(
    <div className = "plushy"> 
      <img className = 'plushy_image' src = {image2} ></img>
      <h2 className='plushy_name'> {name2} </h2>
      <p className='plushy_text'> {text2} </p>
    </div>
  )
}



document.querySelector('#root').innerHTML = render(
  <div className="container">
    
    <header>
      <h1>Plyšáci</h1>
    </header>

    <div className = "plushies">
      <PlushieSilvestr/>
      <PlushieCtirad/>
    </div>

    
  </div>
);
*/

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <main>
      <Plysaci />
    </main>
  </div>
);