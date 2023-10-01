import { View, Text, Button} from 'react-native-web';

export default function({
    changeScreen,
    setNextScreen
}){

    const handleClickVelha = () =>{
        changeScreen("escolherNomes");
        setNextScreen("jgVelha");
    }
    const handleClickForca = () =>{
        changeScreen("escolherPalavra");
    }
    const handleClickMemoria = () =>{
        changeScreen("escolherNomes");
        setNextScreen("jgMemoria");
    }

    return(
        <View>
            <Text>
                Escolha seu minigame:
            </Text>

            <Button title = "Jogo da Velha" onPress = {handleClickVelha}/>
            <Button title = "Jogo da Forca" onPress = {handleClickForca}/>
            <Button title = "Jogo da Memória" onPress = {handleClickMemoria}/>
        </View>
    )
}