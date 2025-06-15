import React, { useState } from "react";
import jogos from "./jogos.json"; // Ajuste o caminho dependendo da sua estrutura
import "./home.css";

function Home() {
  const [flipped, setFlipped] = useState({});

  function toggleFlip(index) {
    setFlipped(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }

  return (
    <div className="container_card">
      {jogos.map((jogo, index) => (
        <div
          key={index}
          className={`card ${flipped[index] ? "flipped" : ""}`}
          onClick={() => toggleFlip(index)}
        >
          <div className="card-front">
            <img src={jogo.imagem} alt={`Capa do jogo ${jogo.nome}`} />
            <span className="plataforma">{jogo.plataforma}</span>
          </div>
          <div className="card-back">
            <p><strong>Início:</strong> {jogo.inicio}</p>
            <p><strong>Término:</strong> {jogo.termino}</p>
            <p><strong>Situação:</strong> {jogo.situacao}</p>
            <p><strong>Tempo de jogo:</strong> {jogo.tempo}</p>
            <p><strong>Dificuldade:</strong> {jogo.dificuldade}</p>
            <p><strong>Nota:</strong> {jogo.nota}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
