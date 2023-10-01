import { useState } from 'react';
import { View, Text, Button, TextInput,  StyleSheet} from 'react-native-web';

export default function({
    changeScreen,
    palavra
}){

    const [pl, setPl] = useState([palavra.split("")]);
    const [plEscondida, setPlEscondida] = useState([palavra.split("")]);
    const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
    const [chute, setChute] = useState("");

    const handleClickVoltar = () => {
        changeScreen("escolherPalavra");
    }
    const  handleClickChutar = () => {

        if(chute.length == 1){
            if(chute && !letrasEscolhidas.includes(chute)){
                setLetrasEscolhidas([...letrasEscolhidas, chute])
                console.log(letrasEscolhidas)
            }
        }
    }

    

    return(
    <View>
        <Text>
            Jogo da Forca
        </Text>

        {palavra.split("").map((letra, indexLetra) => (
            <Text key={indexLetra}>{letra}</Text>
        ))}

        <TextInput placeholder ="Chute" onChangeText = {setChute}/>

        <Button title="Chutar" onPress={handleClickChutar}/>
        <Button title="Voltar" onPress={handleClickVoltar}/>

    </View>
    )
}