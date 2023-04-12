import { useState } from "react";
import Alface from "./Assets/alface.png";
import Beterraba from "./Assets/beterraba.png";
import Cenoura from "./Assets/cenoura.png";
import Cereja from "./Assets/cereja.png";
import Laranja from "./Assets/laranja.png";
import Limao from "./Assets/limao.png";
import Manga from "./Assets/manga.png";
import Tomate from "./Assets/tomate.png";

function App() {
  const [frutas, setFrutas] = useState([
    Alface,
    Beterraba,
    Cenoura,
    Cereja,
    Laranja,
    Limao,
    Manga,
    Tomate
  ]);

  const [numeros, setNumeros] = useState(0);

  return (
    <main>
      <div>
        {frutas.map((item) => (
          <img src={item} alt="" />
        ))}
      </div>
    </main>
  );
}

export default App;
