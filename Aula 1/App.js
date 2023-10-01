import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import EscolherNomes from './src/PgEscolherNomes';
import JgVelha from './src/JGVelha';
import Home from './src/Home';
import JgMemoria from './src/JGMemoria';
import JgForca from './src/JGForca';
import EscolherPalavra from './src/PgEscolherPalavra';

export default function App() {

  const[player1, setPlayer1] = useState("");
  const[player2, setPlayer2] = useState("");
  const[screen, setScreen] = useState("home");
  const[nextScreen, setNextScreen] = useState("");
  const[palavra, setPalavra] = useState("");

  const checkScreen = (screenName) => screenName === screen;

  const setJogadores = (nome1, nome2) =>{
    setPlayer1(nome1);
    setPlayer2(nome2);
  }

  const mudarPalavra = (palavra1) =>{
    setPalavra(palavra1)
  }

  const changeScreen = (newScreen) => setScreen(newScreen)


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("escolherNomes") && 
      (<EscolherNomes
        mudarNomeJogadores = {setJogadores}
        nextScreen = {nextScreen}
        changeScreen = {changeScreen}
        />
      )}
      {checkScreen("escolherPalavra") && (<EscolherPalavra
      changeScreen = {changeScreen}
      mudarPalavra = {mudarPalavra}
      />)}
      {checkScreen("jgVelha") && (<JgVelha
      changeScreen = {changeScreen}
      nextScreen = {nextScreen}
      player1={player1}
      player2={player2}
      />)}
      {checkScreen("home") && (<Home
      changeScreen = {changeScreen}
      setNextScreen = {setNextScreen}
      />)}
      {checkScreen("jgMemoria") && (<JgMemoria  
        changeScreen = {changeScreen}
        newScreen = {nextScreen}
        player1 = {player1}
        player2 = {player2}
      />)}
      {checkScreen("jgForca") && (<JgForca
      changeScreen = {changeScreen}
      palavra = {palavra}
      />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    height: 20,
    borderStyle: "solid",
    boderColor: "black",
    borderWidth: 1,
  },
});
