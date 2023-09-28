import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Home({mudarNomeJogadores, changeScreen}) {

  const[player1, setPlayer1] = useState("");
  const[player2, setPlayer2] = useState("");

  const handleClickJogar = (event) =>{
    
    if(!player1 && !player2){
        alert("Digite os nomes dos players para seguir");
    }
    else if(!player1){
        alert("digite o nome do player 1");
    }else if (!player2){
        alert("digite o nome do player 2");
    }else{
        alert(player1 + " X " + player2);
        if(mudarNomeJogadores){
          mudarNomeJogadores(player1, player2)
          //PRECISO IMPORTAR O NEXTTELA QUE TA NO APP
          changeScreen(nextScreen)
        }
    }
  }

  const handleClickVoltar = () =>{
    changeScreen("home");
  }

  return (
    <View style={styles.container}>
      <Text>Nome: {player1} </Text>
      <TextInput  style= {styles.input} placeholder = 'Player 1' onChangeText={setPlayer1}/>
      
      <Text>Nome: {player2} </Text>
      <TextInput  style= {styles.input} placeholder = 'Player 2' onChangeText={setPlayer2}/>
      
      <Button title='Botão' onPress={handleClickJogar}/>

      <Button title='Voltar para o menu' onPress={handleClickVoltar}/>
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