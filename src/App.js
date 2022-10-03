import TemplateExpressions from "./components/TemplateExpressions";
import FirstComponent from "./components/FirstComponent";
import Events from "./components/Events";
import Pikachu from "./assets/pikachu.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

import "./App.css";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "BMW", color: "Preto", newCar: false, km: 1000 },
    { id: 3, brand: "VM", color: "Roxo", newCar: false, km: 23345 },
  ];

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
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Julia" />
      {/* destructuring */}
      <CarDetails brand="VM" km={1000} color="Azul" />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={2000} color="Vermelho" />
      <CarDetails brand="Fiat" km={4000} color="Verde" newCar={true} />
      {/* reaproveitando */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
