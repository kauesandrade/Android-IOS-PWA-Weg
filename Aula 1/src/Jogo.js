import { View, Text, Button } from 'react-native-web';

export default function Jogo(props){

    const handleClick = () => {
        props.changeScreen("home")
    }

    return(
        <View>
            <Text>
                Jogo
            </Text>
            <Button title='Voltar' onPress={handleClick}/>
        </View>
    )
}