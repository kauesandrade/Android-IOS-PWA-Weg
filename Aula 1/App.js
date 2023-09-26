import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const[player1, setPlayer1] = useState("");
  const[player2, setPlayer2] = useState("");

  const handleClick = (event) =>{
    alert(player1 + " X " + player2);
  }

  return (
    <View style={styles.container}>
      <Text>Nome: {player1} </Text>
      <TextInput  style= {styles.input} placeholder = 'Player 1' onChangeText={setPlayer1}/>
      <Text>Nome: {player2} </Text>
      <TextInput  style= {styles.input} placeholder = 'Player 2' onChangeText={setPlayer2}/>
      <Button title='Botão' onPress={handleClick}/>
      <StatusBar style="auto" />
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


function myState (_state){

  let state = _state

  function setState(value){
    state = value
  }

  return [state, setState];
}

const [nome, setNome] = myState ("Kauê");