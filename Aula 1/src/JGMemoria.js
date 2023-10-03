import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native-web';
import { useState } from 'react';

const tabuleiro = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','',''],]

export default function({
    changeScreen,
    player1,
    player2
}){

    const [state, setState] = useState(tabuleiro);

    this.cards = [
        {Card: 1, figura: "A", mostrado: false, ok: false},
        {Card: 2, figura: "B", mostrado: false, ok: false},
        {Card: 3, figura: "C", mostrado: false, ok: false},
        {Card: 4, figura: "D", mostrado: false, ok: false},
        {Card: 5, figura: "F", mostrado: false, ok: false},
        {Card: 6, figura: "G", mostrado: false, ok: false},
        {Card: 7, figura: "H", mostrado: false, ok: false},
        {Card: 8, figura: "I", mostrado: false, ok: false},
        {Card: 9, figura: "J", mostrado: false, ok: false},
        {Card: 10, figura: "K", mostrado: false, ok: false},
        {Card: 11, figura: "L", mostrado: false, ok: false},
        {Card: 12, figura: "M", mostrado: false, ok: false},
        {Card: 13, figura: "N", mostrado: false, ok: false},
        {Card: 14, figura: "O", mostrado: false, ok: false},
        {Card: 15, figura: "P", mostrado: false, ok: false},
        {Card: 16, figura: "Q", mostrado: false, ok: false},
        {Card: 17, figura: "R", mostrado: false, ok: false},
        {Card: 18, figura: "S", mostrado: false, ok: false},
        {Card: 19, figura: "T", mostrado: false, ok: false},
        {Card: 20, figura: "U", mostrado: false, ok: false},
        {Card: 21, figura: "V", mostrado: false, ok: false},
        {Card: 22, figura: "W", mostrado: false, ok: false},
        {Card: 23, figura: "X", mostrado: false, ok: false},
        {Card: 24, figura: "Y", mostrado: false, ok: false},
        {Card: 25, figura: "Z", mostrado: false, ok: false}
    ]

    const handleClickPosicao = (linha, coluna) => {
        if


    } 




    return(
    <View>

    </View>
    )

    

    
}

const styles = StyleSheet.create({
    linha: {
      display: "flex",
     flexDirection: "row"
    },
    botaoJogo: {
        backgroundColor: 'red',
        width: 80,
        height: 80,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    botaoJogoFonte: {
      fontSize: 50,
      color: "#fff"
    }
});