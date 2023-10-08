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
  ["", "", "", "", ""]
]

const cards = ["🥐", "🍔", "🍕", "🌭", "🍟", "🥓", "🥨", "🥟", "🥩", "🍧", "🍣", "🧀", "🥮", "🍤", "🍪", "🍮", "🎂", "🍬", "🍭", "🍯", "☕", "🥪", "🍍", "🍇", "🥝"]

export default function ({
  changeScreen,
  player1,
  player2
  
}) {

  const [state, setState] = useState([...tabuleiro]);
  const [vez, setVez] = useState();
  const [selectCard, setSelectCard] = useState([0,0]);
  const [selectCard2, setSelectCard2] = useState([0,0]);
  const [allCards, setAllcards] = useState([...cards, ...cards]);
  const [jogada, setJogada] = useState(0);
  const [pontos, setPontos] = useState([-1, 0]);

  // FAZER RANDOMIZAÇÂO APENAS


  useEffect(() => {
    console.log("Card1 "+ selectCard[0], selectCard[1])
    console.log("Card2 "+ selectCard2[0], selectCard2[1])
    console.log("All cards " + allCards[((selectCard[0]) * 5) + (selectCard[1])] + " / " + allCards[((selectCard2[0]) * 5) + (selectCard2[1])])
  }, [selectCard, selectCard2]) 

  useEffect(() => {
    setTimeout(() => { 
      verificarJogada();
    }, 700)
  }, [selectCard2]);


  useEffect(() => {
    vericarWin();
  }, [pontos])

  const vericarWin = () =>{
    if(pontos[0] + pontos[1] == 25){
      pontos[0] > pontos[1] ? acabou(`Jogador ${player1} venceu!!`) : acabou(`Jogador ${player2} venceu!!`)
    }
  }

  const acabou = (mensagem) =>{
    alert(mensagem);
    setState(tabuleiro);
    getRandomCards();
    voltar();
  }

  const mudarVez = () => {
    vez == player1 ? setVez(player2) : setVez(player1);
  }

  const verificarJogada = () => {

    if (allCards[((selectCard[0]) * 5) + (selectCard[1])] === allCards[((selectCard2[0]) * 5) + (selectCard2[1])]) {
      vez == player1 ? setPontos([pontos[0] + 1, pontos[1]]) : setPontos([pontos[0], pontos[1] + 1])
    }

    else {
      const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[3]], [...state[4]], [...state[5]], [...state[6]], [...state[7]], [...state[8]], [...state[9]]]


      novoState[selectCard[0]][selectCard[1]] = ""
      novoState[selectCard2[0]][selectCard2[1]] = ""
      setState(novoState)
      mudarVez();
    }
  }

  const handleClickPosicao = (linha, coluna) => {
    const novoState = [[...state[0]], [...state[1]], [...state[2]], [...state[3]], [...state[4]], [...state[5]], [...state[6]], [...state[7]], [...state[8]], [...state[9]]]
    novoState[linha][coluna] = allCards[((linha) * 5) + (coluna)];
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

  const voltar = () =>{
    changeScreen("escolherNomes")
  }

  const getSituacao = () =>{
    if(vez == player1){
      return "Vez do jogador: "+ player1
    }else{
      return "Vez do jogador: "+ player2
    }
  }

  return (
    <View>
      <Text>
        Jogo da Velha
      </Text>
      <Button title='Voltar' onPress={() => voltar()} />
      <Text>
        {getSituacao()}
      </Text>
      <Text>
        Pontos: {player1} : {pontos[0]} X {player2} : {pontos[1]}
      </Text>
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
    width: 40,
    height: 40,
    margin: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  botaoJogoFonte: {
    fontSize: 25,
    color: "#fff"
  }
});