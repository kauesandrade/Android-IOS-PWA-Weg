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

    const handleClickChutar = () => {

        if(chute.length == 1){
            if(chute && !letrasEscolhidas.includes(chute)){
                setLetrasEscolhidas([...letrasEscolhidas, chute])
                if (!letrasEscolhidas.includes(chute) && !palavra.includes(chute)) {
                    setTentativas(tentativas - 1);
                }

            }else{
                alert("Você já chutou a letra: "+chute)
            }
        }else if(chute.length > 1){
            if(chute != palavra){
                const [tentativasN, setTentativasN] = useState(tentativas)
                setTentativas(tentativasN-1)
            }
        }

        setChute("");

    }

    const mascaraPalavra = palavra.split('').map((letra) => (
        letrasEscolhidas.includes(letra) ? letra : '_')
    ).join('');

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Jogo da Forca</Text>
          <Text style={styles.tries}>Tentativas restantes: {tentativas}</Text>
          <Text style={styles.word}>Chutes: {letrasEscolhidas}</Text>
          <Text style={styles.word}>Palavra: {mascaraPalavra}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite uma letra"
            value={chute}
            onChangeText={(text) => setChute(text)}
          />
          <Button title="Adivinhar" onPress={handleClickChutar} />
          <Button title="Voltar" onPress={handleClickVoltar}/>
        </View>
      );
    };
    
    // const App = () => {
    //   return (
    //     <PaperProvider>
    //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <HangmanGame />
    //       </View>
    //     </PaperProvider>
    //   );
    // };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      tries: {
        fontSize: 18,
        marginBottom: 10,
      },
      word: {
        fontSize: 24,
        marginBottom: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        fontSize: 16,
        padding: 5,
        marginBottom: 10,
      },
    });