import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeFlix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  return (
    <div className="meus__filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>

              <div>
                <Link to={`/film/${filme.id}`}>Detalhes do filme</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
