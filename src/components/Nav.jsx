import { NavLink } from "react-router";

export const Nav = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li>
        <NavLink to="/">Seuss Treasury</NavLink>
        </li>
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/quotes">Quotes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

