import React, { Component } from "react";
//API é basicamente uma grande array de objetos [{},{},{},{},{},{}]
import axios from "axios";
import styled from "styled-components";
import Hortifruti from "./Hortifruti.js";

const BoxApi = styled.div`
  border: solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardApi = styled.div`
  img {
    width: 20vw;
  }
  border: solid blue;
`;

//axios é uma biblioteca do React que permite a integração do react com a API (Imagine ser uma vara de pesca e a API ser o peixe)

//Método create é para guardar a url baseURL
const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

export default class App extends Component {
  state = {
    informacoes: [] //array para guardar as informações da API
  };

  //Passo para pegar as informações

  PegarPersonagens = async () => {
    const resp = await Api.get();
    //Essa variável resp roda o await que vai ESPERAR a promessa ser retornada, ou seja, retornar a nossa API
    //get: método para pegar a API
    console.log(resp.data.results);

    //varíavel dentro da função pegar personagem
    //mapeamento da API
    const Itens = resp.data.results.map((item) => {
      return {
        ...item
        //retorna cada item da api em uma nova lista
        //...spread: usamos quando todos os elementos de um objeto ou array precisam ser incluídos em um novo array.
      };
    });

    //4º passo trazer os itens para dentro da array informacoes

    this.setState({
      informacoes: Itens
    });
  };
  //Passo para deixar aparecendo as informações
  componentDidMount() {
    this.PegarPersonagens();
  }

  render() {
    return (
      <div>
        <h1> Api </h1>
        <p>
          {" "}
          Para retornar mais de um item, preciso de uma tag envolvendo (div,
          section, ul, nav, fragmento){" "}
        </p>
        <BoxApi>
          {this.state.informacoes.map((item) => (
            <CardApi>
              <img src={item.image} alt="" />
              <h2> {item.name} </h2>
              <p> {item.status} </p>
            </CardApi>
          ))}
        </BoxApi>
        <Hortifruti />
      </div>
    );
  }
}
