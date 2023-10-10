import { useState, useEffect } from 'react';
import { View, Text, Button, TextInput,  StyleSheet, Image} from 'react-native-web';

export default function({
    changeScreen,
    palavra
}){
    const [tentativas, setTentativas] = useState(6)
    const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
    const [chute, setChute] = useState("");
    const [image, setImagem] = useState('./imgs/img0.png')

    useEffect(() =>{
      verificarWin();
    }, [letrasEscolhidas])
    
    useEffect(() =>{
      verificarImagem();
    }, [tentativas])


    const mascaraPalavra = palavra.split('').map((letra) => {

      if(letrasEscolhidas.includes(letra)){
        return letra;
      }else if(letra == " "){
        return '-'
      }else{
        return '_'
      }

    }).join(' ')

    const palavraVerificar = palavra.split('').map((letra) =>(
      letra == " " ? "-" : letra
    )).join(' ');

    const verificarImagem = () =>{
      if(tentativas == 5){
        setImagem('./imgs/img1.png')
      }
      if(tentativas == 4){
        setImagem('./imgs/img2.png')
      }
      if(tentativas == 3){
        setImagem('./imgs/img3.png')
      }
      if(tentativas == 2){
        setImagem('./imgs/img4.png')
      }
      if(tentativas == 1){
        setImagem('./imgs/img5.png')
      }
      if(tentativas == 0){
        setImagem('./imgs/img6.png')
      }
    }

    const verificarWin = () =>{
        if(palavraVerificar == mascaraPalavra || palavra == chute){
            alert("Parabéns você ganhou!!!");
            handleClickVoltar();
        }else if(tentativas == 0){
            setTimeout (() =>{
              alert("Não foi dessa vez, a palavra era: "+palavra);
            changeScreen("escolherPalavra");
          }, 500)
           
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
                setTentativas(tentativas-1)
            }else{
              verificarWin();
            }
        }

      setChute("");

    }

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Jogo da Forca</Text>
          
            <Image
              style={styles.hangMan}
              source = {require(""+image)}
            />
          </View>
         
          <View>
            <Text style={styles.tentativas}>Tentativas restantes: {tentativas}</Text>
            <Text style={styles.palavra}>Chutes: {letrasEscolhidas}</Text>
            <Text style={styles.palavra}>Palavra: {mascaraPalavra}</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Digite uma letra"
              value={chute}
              onChangeText={(text) => setChute(text)}
            />
          </View>
     
          <View style={styles.button}>
            <Button title="Adivinhar" onPress={handleClickChutar} />
            <Button title="Voltar" onPress={handleClickVoltar}/>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#3bcbdb",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tentativas: {
        fontSize: 18,
        marginBottom: 5,
      },
      palavra: {
        fontSize: 24,
        marginBottom: 5,
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        fontSize: 16,
        padding: 5,
        marginBottom: 10,
      },
      hangMan: {
        width: 250,
        height: 250,
      },
      button: {
        gap: 5
      }
    });