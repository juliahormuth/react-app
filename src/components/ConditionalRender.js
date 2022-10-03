import { useState } from "react";

export const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Julia");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true</p>}
      <h1> If ternário</h1>
      {name === "Daniel" ? (
        <div>
          <p>O nome é {name}</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Daniel")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
