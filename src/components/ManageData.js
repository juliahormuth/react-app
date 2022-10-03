import { useState } from "react";

const ManageData = () => {
  let someDate = 10;

  const [number, setNumber] = useState(someDate);

  return (
    <div>
      <div>
        <h1>Soma</h1>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(20)}>Mudar variável</button>
      </div>
    </div>
  );
};

export default ManageData;
