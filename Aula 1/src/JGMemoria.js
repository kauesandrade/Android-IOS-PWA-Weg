import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native-web";

const tabuleiro = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]]

  // OLHAR CODIGO DO WINTER PARA VER COMO REOGANIZAR AS CARTAS

const cards = ["🥐", "🍔", "🍕", "🌭", "🍟", "🥓", "🥨", "🥟", "🥩", "🍧", "🍣", "🧀", "🥮", "🍤", "🍪", "🍮", "🎂", "🍬", "🍭", "🍯", "☕", "🥪", "🍍", "🍇", "🥝"]
// const cards = [["🥐"],["🍔"],["🍕"],["🌭"],["🍟"],["🥓"],["🥨"],["🥟"],["🥩"],["🍧"],["🍣"],["🧀"],["🥮"],["🍤"],["🍪"],["🍮"],["🎂"],["🍬"],["🍭"],["🍯"],["☕"],["🥪"],["🍍"],["🍇"],["🥝"]]

export default function ({
  changeScreen,
  nextScreen,
  player1,
  player2
  
}) {


  const [state, setState] = useState([...tabuleiro]);
  const [vez, setVez] = useState(player1);
  const [selectCard, setSelectCard] = useState([0,0]);
  const [selectCard2, setSelectCard2] = useState([0,0]);
  const [allCards, setAllcards] = useState([...cards, ...cards]);
  const [jogada, setJogada] = useState(0);
  const [pontos, setPontos] = useState([0, 0]);


  useEffect(() => {
    console.log("Card1 "+ selectCard[0], selectCard[1])
    console.log("Card2 "+ selectCard2[0], selectCard2[1])
    console.log("All cards " + allCards[selectCard[0]+selectCard[1]] + " / " + allCards[selectCard2[0]+selectCard2[1]])
  }, [selectCard, selectCard2]) 

  useEffect(() => {
    verificarJogada();
  }, [selectCard2]);
  useEffect(() => {
    pontos[0] + pontos[1] == 25 ? console("acabou") : console.log(pontos[0] + pontos[1]);
  }, [pontos]) 

  useEffect(() => {
    console.log("dadda")
  }, [state]) 




  const mudarVez = () => {
    vez == player1 ? setVez(player2) : setVez(player2);

  }

  const verificarJogada = () => {

    if (allCards[(selectCard[0] + 1) * (selectCard[1] + 1) - 1] === allCards[(selectCard2[0] + 1) * (selectCard2[1] + 1) - 1]) {
      vez == player1 ? setPontos([pontos[0] + 1, pontos[1]]) : setPontos([pontos[0], pontos[1] + 1])
      mudarVez();
    }
    else {
      const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[3]], [...state[4]], [...state[5]], [...state[6]], [...state[7]], [...state[8]], [...state[9]]]
      
      console.log("Antes")
      console.log(novoState[selectCard[0]][selectCard[1]])
      console.log(novoState[selectCard2[0]][selectCard2[1]])
      
      novoState[selectCard[0]][selectCard[1]] = ""
      novoState[selectCard2[0]][selectCard2[1]] = ""

      console.log("depois")
      console.log(novoState[selectCard[0]][selectCard[1]])
      console.log(novoState[selectCard2[0]][selectCard2[1]])

      setState(novoState)
      console.log(novoState)
      console.log(state)
    }
  }

  const handleClickPosicao = (linha, coluna) => {

    
    const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[3]], [...state[4]], [...state[5]], [...state[6]], [...state[7]], [...state[8]], [...state[9]]]
    novoState[linha][coluna] = allCards[(linha + 1) * (coluna + 1) - 1];
    setState([...novoState]);
    if (state[linha][coluna] != "") {
      return;
    }
    

    else if (jogada == 0) {
      setJogada(1);
      setSelectCard([linha, coluna]);
    }
    else if (jogada == 1) {
      setJogada(0);
      setSelectCard2([linha, coluna]);
    }

    


  }

  return (
    <View>
      <Text>
        Jogo da Velha
      </Text>
      {/* <Text>
            Vez do jogador: {getPlayerName()} - {vez}
        </Text> */}
      {/* <Button title='Voltar' onPress={voltar} /> */}
      {
        state.map((linha, indexLinha) => {
          return (
            <View style={styles.linha} key={indexLinha}>
              {linha.map((coluna, indexColuna) =>
                <TouchableOpacity key={`${indexLinha}${indexColuna}${coluna}`}
                  onPress={() => handleClickPosicao(indexLinha, indexColuna)}
                >
                  <View style={styles.botaoJogo}>
                    <Text style={styles.botaoJogoFonte}>
                      {coluna}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          )
        })
      }
    </View>
  )
}
const styles = StyleSheet.create({
  linha: {
    display: "flex",
    flexDirection: "row"
  },
  botaoJogo: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    margin: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  botaoJogoFonte: {
    fontSize: 50,
    color: "#fff"
  }
});