import React from "react";
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Julia", "Daniel", "Felipe"]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
