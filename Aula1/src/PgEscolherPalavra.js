import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function({
    changeScreen,
    mudarPalavra
}){
    const handleClickJogar = () =>{

        if(palavra.length != 0){
            mudarPalavra(palavra)
            changeScreen("jgForca")
        }else{
            alert("Digie um palavra para começar")
        }

    }

    const handleClickVoltar = () =>{
        changeScreen("home")
    }

    const [palavra, setPalavra] = useState("")

    return(
        <View style={styles.container}>
            <Text>
                Escolha uma palavra para a forca:
            </Text>
            <TextInput style={styles.input} placeholder='digite um palavra' onChangeText={setPalavra}/>
            <Button title='Jogar' onPress={handleClickJogar}/>
            <Button title='Voltar para o menu' onPress={handleClickVoltar}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5
    },
    input: {
      border: "none",
      padding: 1,
      backgroundColor: '#e8e8e8',
    },
     
  });