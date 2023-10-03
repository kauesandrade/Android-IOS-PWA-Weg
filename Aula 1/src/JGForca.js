import { useState, useEffect } from 'react';
import { View, Text, Button, TextInput,  StyleSheet} from 'react-native-web';

export default function({
    changeScreen,
    palavra
}){
    const [tentativas, setTentativas] = useState(6)
    const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
    const [chute, setChute] = useState("");

    useEffect(() =>{
        verificarWin();
    })  

    const verificarWin = () =>{
        if(palavra == mascaraPalavra || palavra == chute){
            alert("Parabéns você ganhou!!!");
            handleClickVoltar();
        }else if(tentativas == 0){
            alert("Não foi dessa vez, a palavra era: "+palavra);
            changeScreen("escolherPalavra");
        }
    }


    const handleClickVoltar = () => {
        changeScreen("escolherPalavra");
    }

    const  handleClickChutar = () => {

        if(chute.length == 1){
            if(chute && !letrasEscolhidas.includes(chute)){
                setLetrasEscolhidas([...letrasEscolhidas, chute])
                console.log(letrasEscolhidas)
                if (!word.includes(guess)) {
                    setTentativas(tentativas - 1);
                }

            }else{
                alert("Você já chutou a letra: "+chute)
            }
        }else if(chute.length > 1){
            if(chute != palavra){
                setTentativas(tentativas-1)
            }
        }
    }

    const mascaraPalavra = palavra.split('').map((letra) => (
        letrasEscolhidas.includes(letra) ? letra : '_')
    ).join('');


    return(
    <View>
        <Text>
            Jogo da Forca
        </Text>

        {mascaraPalavra.split("").map((letra, indexLetra) => (
            <Text key={indexLetra}>{letra}</Text>
        ))}

        <Text>{tentativas}</Text>

        {letrasEscolhidas.map((letra, indexLetra) => (
            <Text key={indexLetra}>{letra}</Text>
        ))}

        <TextInput placeholder ="Chute" onChangeText = {setChute}/>

        <Button title="Chutar" onPress={handleClickChutar}/>
        <Button title="Voltar" onPress={handleClickVoltar}/>

    </View>
    )
}