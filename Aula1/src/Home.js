import { View, Text, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native-web';

export default function ({
    changeScreen,
    setNextScreen
}) {

    const handleClickVelha = () => {
        changeScreen("escolherNomes");
        setNextScreen("jgVelha");
    }
    const handleClickForca = () => {
        changeScreen("escolherPalavra");
    }
    const handleClickMemoria = () => {
        changeScreen("escolherNomes");
        setNextScreen("jgMemoria");
    }

    return (
        <View style={styles.div} >
            <Text>
                Escolha seu minigame:
            </Text>
            <Button color="#e01f1f" title="Jogo da Velha" onPress={handleClickVelha} />
            <Button color="#3bcbdb" title="Jogo da Forca" onPress={handleClickForca} />
            <Button color="#1f6ce0" title="Jogo da Memória" onPress={handleClickMemoria} />
           
        </View>
    )
}

const styles = StyleSheet.create({

    div: {
        gap: 3
    }
})