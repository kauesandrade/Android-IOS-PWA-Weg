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

const cards = ["🥐", "🍔", "🍕", "🌭", "🍟", "🥓", "🥨", "🥟", "🥩", "🍧", "🍣", "🧀", "🥮", "🍤", "🍪", "🍮", "🎂", "🍬", "🍭", "🍯", "☕", "🥪", "🍍", "🍇", "🥝"]
// const cards = [["🥐"],["🍔"],["🍕"],["🌭"],["🍟"],["🥓"],["🥨"],["🥟"],["🥩"],["🍧"],["🍣"],["🧀"],["🥮"],["🍤"],["🍪"],["🍮"],["🎂"],["🍬"],["🍭"],["🍯"],["☕"],["🥪"],["🍍"],["🍇"],["🥝"]]

export default function ({
  changeScreen,
  nextScreen,
  player1,
  player2
}) {


  const [state, setState] = useState(tabuleiro);
  const [vez, setVez] = useState(player1);
  const [selectCard, setSelectCard] = useState([]);
  const [selectCard2, setSelectCard2] = useState([]);
  const [allCards, setAllcards] = useState([...cards, ...cards]);
  const [jogada, setJogada] = useState(0);
  const [pontos, setPontos] = useState([0, 0]);

  const mudarVez = () => {
    vez === player1 ? setVez(player2) : setVez(player2);

  }

  const verificarJogada = () => {

    if (state[selectCard2[0]][selectCard2[1]] = state[selectCard[0]][selectCard[1]]) {
      vez == player1 ? setPontos([pontos[0] + 1, pontos[1]]) : setPontos([pontos[0], pontos[1] + 1])
      mudarVez();
    }
    else if (selectCard2[0] != selectCard[0]) {
      const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[3]], [...state[4]], [...state[5]], [...state[6]], [...state[7]], [...state[8]], [...state[9]]]

      novoState[selectCard[0]][selectCard[1]] == ""
      novoState[selectCard2[0]][selectCard2[1]] == ""

      setState(novoState);
    }
  }

  const handleClickPosicao = (linha, coluna) => {

    if (state[linha][coluna] != "") {
      return;
    }
    else if (state[linha][coluna] == "" && jogada == 0) {
    
      setJogada(1);
      setSelectCard([linha, coluna]);
    }
    else if (state[linha][coluna] == "" && jogada == 1) {
      console.log("hgsf")
      setJogada(0);
      setSelectCard2([linha, coluna]);
      verificarJogada();
    }


    const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[3]], [...state[4]], [...state[5]], [...state[6]], [...state[7]], [...state[8]], [...state[9]]]
    novoState[linha][coluna] = allCards[(linha + 1 * coluna + 1) - 1];
    setState(novoState);

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