import TemplateExpressions from "./components/TemplateExpressions";
import FirstComponent from "./components/FirstComponent";
import Events from "./components/Events";
import Pikachu from "./assets/pikachu.png";
import ManageData from "./components/ManageData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TemplateExpressions />
      <FirstComponent />
      <Events />
      <div>
        {/*Imagem em public */}
        <img src="/vayne.jpg" alt="Vayne" />
      </div>
      <div>
        {/*Imagem em assets */}
        <img src={Pikachu} alt="Pikachu" />
      </div>
      <ManageData />
    </div>
  );
}

export default App;
