/*importation du fichier SVG*/
import logo from './logo.svg';
/*importation du fichier css du composant App*/
import './App.css';
/*importation du stylesheet du framework bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*importation du composant ContainerSyst*/
import ContainerSyst from './Component/ContainerSyst';
/*Function App qui fait appel au composant ContainerSyst*/
function App() {
  return (
   <div>
    <ContainerSyst/>
    
   </div>
  );
}

export default App;
