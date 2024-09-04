import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {Array.from({ length: 9 }, (_, index) => (
          <li key={index}>
            <Link to={`/exercise${index + 8}`}>Exercício {index + 8}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
