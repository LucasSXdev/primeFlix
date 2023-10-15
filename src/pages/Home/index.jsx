import { useEffect, useState } from "react";
import api from "../../Services/api";
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

      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Bem vindo ao home</h1>
    </div>
  );
}
