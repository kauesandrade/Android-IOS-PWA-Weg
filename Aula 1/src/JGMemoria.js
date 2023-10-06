import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native-web";

const tabuleiro = [
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""],]

const cards = ["🥐","🍔","🍕","🌭","🍟","🥓","🥨","🥟","🥩","🍧","🍣","🧀","🥮","🍤","🍪","🍮","🎂","🍬","🍭","🍯","☕","🥪","🍍","🍇","🥝"]
// const cards = [["🥐"],["🍔"],["🍕"],["🌭"],["🍟"],["🥓"],["🥨"],["🥟"],["🥩"],["🍧"],["🍣"],["🧀"],["🥮"],["🍤"],["🍪"],["🍮"],["🎂"],["🍬"],["🍭"],["🍯"],["☕"],["🥪"],["🍍"],["🍇"],["🥝"]]

export default function({
  changeScreen,
  nextScreen,
  player1,
  player2
}){


  const [state, setState] = useState(tabuleiro);
  const [vez, setVez] = useState(player1);
  const [selectCard, setSelectCard] = useState([]);
  const [selectCard2, setSelectCard2] = useState([]);
  const [allCards, setAllcards] = useState([...cards, ...cards]);
  const [jogada, setJogada] = useState(0);
  const [pontos, setPontos] = useState([0,0]);

  
  const verificarJogada = () =>{
    
    if(selectCard2[0] === selectCard[0] ){
      vez === player1 ? setPontos([pontos[0] + 1, pontos[1]]) : setPontos([pontos[0], pontos[1] + 1])
    }
  }

  const handleClickPosicao = (index, linha, coluna) =>{

    const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[4]], [...state[5]]]

    if(state[linha][coluna] !== ""){
      return;
    }
    else if(state[linha][coluna] === "" && jogada == 0){
      setJogada(1);
      novoState[linha][coluna] == allCards[linha*coluna];
      setSelectCard([index, linha, coluna]);
      setState(novoState);

    }else if (state[linha][coluna] === "" && jogada === 1){
      setJogada(0);
      novoState[linha][coluna] == allCards[linha * coluna];
      setState(novoState);
      setSelectCard2([index, linha, coluna]);
      verificarJogada();
    }

    
  }




}