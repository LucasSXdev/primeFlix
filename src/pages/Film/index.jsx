import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from "../../Services/api";
import "./index.css";

export default function Film() {
  const { id } = useParams();
  const [filme, setFilmes] = useState({});
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "1d1a46726ec421f9e5e0c2eed6e43edc",
            language: "pt-BR",
          },
        })
        .then((res) => {
          setFilmes(res.data);
          setLoad(false);
        })
        .catch(() => {
          console.log("filme nao existe");
        });
    }

    loadFilmes();
  }, []);

  if (loading) {
    return <h1>Carregando filmes...</h1>;
  }

  return (
    <div className="filme__info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt=""
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <h3>Avaliação:{`${filme.vote_average.toFixed(2)}/10`}</h3>
    </div>
  );
}
