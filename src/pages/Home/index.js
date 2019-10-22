import React from "react";
import { Image } from "react-bootstrap";
import Eventos from "../../components/Eventos";
import CampoPesquisa from "../../components/CampoPesquisa";
import Login from "../../components/Modal-Login";
import bg from "../../assets/bg.svg";
import { Banner } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
        <section className="context">
          <Image className="img" src={bg} fluid />
          <div className="banner">
            <h2 className="titulo">O que você quer fazer ?</h2>
            <div className="barra-pesquisa">
              <CampoPesquisa />
            </div>
          </div>
          <div className="butoes">
            <button className="bora">Bora</button>
            <button className="criar-role">Criar um rolê</button>
          </div>
        </section>
      </Banner>
      <div className="faixa" />
      <Eventos />
      <Login />
    </main>
  );
}
