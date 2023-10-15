import { Link } from "react-router-dom";
import "./index.css";
export default function Header() {
  return (
    <header>
      <Link to="/">Prime flix</Link>
      <Link to="/film">Filmes</Link>
    </header>
  );
}
