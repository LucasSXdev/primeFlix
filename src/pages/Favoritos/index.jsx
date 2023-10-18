import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeFlix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function deleteMovie(id) {
    let filterFilmes = filmes.filter((filme) => {
      return id !== filme.id;
    });

    setFilmes(filterFilmes);
    localStorage.setItem("@primeFlix", JSON.stringify(filterFilmes));
    toast.success("Filme excluído com sucesso!");
  }

  return (
    <div className="meus__filmes">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && (
        <span>Voce nao possui nenhum filme salvo :( </span>
      )}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>

              <div>
                <Link to={`/film/${filme.id}`}>Detalhes do filme</Link>
                <button onClick={() => deleteMovie(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
