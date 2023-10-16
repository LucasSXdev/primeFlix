import { useEffect, useState } from "react";
import api from "../../Services/api";
import "./index.css";
import { Link } from "react-router-dom";
//url da api:/movie/now_playing?api_key=1e05456c352bfe27ab41dcc7db359cbe&language=pt-BR

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "1d1a46726ec421f9e5e0c2eed6e43edc",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results);
      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div className="container__filmes">
      {filmes.map((filme) => {
        return (
          <div key={filme.id}>
            <h2>{filme.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
              alt={filme.title}
            />
            <Link to={`/film/${filme.id}`}>Acessar</Link>
          </div>
        );
      })}
    </div>
  );
}
