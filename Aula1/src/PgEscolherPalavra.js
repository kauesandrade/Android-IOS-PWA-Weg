import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

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
        <View>
            <Text>
                Escolha uma palavra para a forca:
            </Text>
            <TextInput placeholder='digite um palavra' onChangeText={setPalavra}/>
            <Button title='Jogar' onPress={handleClickJogar}/>
            <Button title='Voltar para o menu' onPress={handleClickVoltar}/>

        </View>
    )
}
