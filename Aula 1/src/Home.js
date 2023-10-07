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
        <View >
            <Text>
                Escolha seu minigame:
            </Text>
            {/* <View>
                <TouchableOpacity onPress={handleClickVelha}>
                    <View style={styles.botao}>
                        <Text>
                            Jogo da Velha
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> */}




            <Button color="#3bcbdb" title="Jogo da Velha" onPress={handleClickVelha} />
            <Button title="Jogo da Forca" onPress={handleClickForca} />
            <Button title="Jogo da Memória" onPress={handleClickMemoria} />
        </View>
    )
}

const styles = StyleSheet({

    botao: {
        backgroundColor: 'red',
        width: 40,
        height: 40,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})