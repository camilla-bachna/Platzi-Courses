import React, { useEffect, useState } from "react";
import GetData from "./GetData";
import "@styles/global.css";
import Template from "./Template";

function App() {
  const [character, setCharacter] = useState(null);

  const findCharacter = async () => {
    const character = await GetData();
    setCharacter(character);
  };

  useEffect(() => {
    findCharacter();
  }, []);

  return character ? <Template character={character} /> : null;
}

export default App;
