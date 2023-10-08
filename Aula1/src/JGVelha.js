import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native-web';
import { useEffect, useState } from 'react';

const tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];

export default function JGVelha({
    changeScreen,
    player1,
    player2
}) {

    const [state, setState] = useState(tabuleiro);
    const [vez, setVez] = useState("X");

    useEffect(() => {
        verificarWin();
    }, [state])

    const voltar = () => {
        changeScreen("escolherNomes");
    }

    const verificarJogada = (figura) => {
        for (let i = 0; i < 3; i++) {
            if (state[i][0] === figura
                && state[i][1] === figura
                && state[i][2] === figura) {
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (state[0][i] === figura
                && state[1][i] === figura
                && state[2][i] === figura) {
                return true;
            }
        }

        if (state[0][0] === figura
            && state[1][1] === figura
            && state[2][2] === figura) {
            return true;
        }

        if (state[0][2] === figura
            && state[1][1] === figura
            && state[2][0] === figura) {
            return true;
        }
    };

    const acabou = (mensagem) => {
        alert(mensagem);
        setState(tabuleiro);
        voltar();
    }

    const verificarWin = () => {
        if (verificarJogada("X")) {
            acabou(`Jogador ${player1} venceu!`);
        }
        else if (verificarJogada("O")) {
            acabou(`Jogador ${player2} venceu`);
        }
        else {
            let jogadas = 0;

            state.forEach(linha => {
                linha.forEach(coluna => {
                    if (coluna === "X" || coluna === "O")
                        jogadas++;
                });
            });

            if (jogadas === 9) {
                acabou("Deu velha! ;( ");
            }
        }
    }

    const handleClickPosicao = (linha, coluna) => {
        if (state[linha][coluna] !== "") {
            return;
        }

        const novoState = [[...state[0]], [...state[1]], [...state[2]]]
        novoState[linha][coluna] = vez;
        setState(novoState);
        setVez(vez === "X" ? "O" : "X");
    }

    const getPlayerName = () => vez === "X" ? player1 : player2;

    return (
        <View>
            <Text>
                Jogo da Velha
            </Text>
            <Text>
                Vez do jogador: {getPlayerName()} - {vez}
            </Text>
            <Button title='Voltar' onPress={voltar} />
            {
                state.map((linha, indexLinha) => {
                    return (
                        <View style={styles.linha} key={indexLinha}>
                            {linha.map((coluna, indexColuna) =>
                                <TouchableOpacity key={`${indexLinha}${indexColuna}${coluna}`}
                                    onPress={() => handleClickPosicao(indexLinha, indexColuna)}
                                >
                                    <View style={styles.botaoJogo}>
                                        <Text style={styles.botaoJogoFonte}>
                                            {coluna}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    )
                })
            }
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