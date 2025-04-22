import './index.css';
import { Plysak } from './Plysak'

export const Plysaci = () => {
  
    return (
      <div>
        <Plysak
          imgLocation="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"
          plysakName="Ctirad"
          plysakDescription= "Můj popis Ctirada"
        />
  
        <Plysak
          imgLocation="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"
          plysakName="Silvestr"
          plysakDescription= "Můj popis Silvestra"
        />
  
        <Plysak
          imgLocation="https://plus.unsplash.com/premium_photo-1661844541352-3b97b83f3edb?q=80&w=3105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          plysakName="Opice"
          plysakDescription= "Můj popis Opice"
        />
        
      </div>
    )
  }