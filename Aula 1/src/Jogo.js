import { View, Text, Button } from 'react-native-web';
import { useState } from 'react';

export default function Jogo(props){

    const [vez, setVez] = useState("player1");
    const [tabuleiro, setTabuleiro] = useState([]);
    const [jogadasRestantes, setJogadasRestantes] = useState(0);

    setJogadasRestantes(9);

    setTabuleiro([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']]);


    const[b1, setB1] = useState("");
    const[b2, setB2] = useState("");
    const[b3, setB3] = useState("");
    const[b4, setB4] = useState("");
    const[b5, setB5] = useState("");
    const[b6, setB6] = useState("");
    const[b7, setB7] = useState("");
    const[b8, setB8] = useState("");
    const[b9, setB9] = useState("");

    const handleClick = (event) => {
        props.changeScreen("home")
    }

    const handleClickB1 = (event) => {
        if(!b1){
            MudaderVez();
            if(vez == "player1"){
                setB1("X");
                tabuleiro[0][0] = b1;

            }else{
                setB1("O");
                tabuleiro[0][0] = b1;
            }
        }
    }
    const handleClickB2 = (event) => {
        if(!b2){
            MudaderVez();
            if(vez == "player1"){
                setB2("X");
                tabuleiro[0][1] = b2;
            }else{
                setB2("O");
                tabuleiro[0][1] = b2;
            }
        }
    }
    const handleClickB3 = (event) => {
        if(!b3){
            MudaderVez();
            if(vez === "player1"){
                setB3("X");
                tabuleiro[0][2] = b3;
            }else{
                setB3("O")
                tabuleiro[0][2] = b3;
            }
        }
    }
    const handleClickB4 = (event) => {
        if(!b4){
            MudaderVez();
            if(vez == "player1"){
                setB4("X");
                tabuleiro[1][0] = b4;
            }else{
                setB4("O");
                tabuleiro[1][0] = b4;
            }
        }
    }
    const handleClickB5 = (event) => {
        if(!b5){
            MudaderVez();
            if(vez == "player1"){
                setB5("X");
                tabuleiro[1][1] = b5;
            }else{
                setB5("O");
                tabuleiro[1][1] = b5;
            }
        }
    }
    const handleClickB6 = (event) => {
        if(!b6){
            MudaderVez();
            if(vez == "player1"){
                setB6("X");
                tabuleiro[1][2] = b6;
            }else{
                setB6("O");
                tabuleiro[1][2] = b6;
            }
        }
    }
    const handleClickB7 = (event) => {
        if(!b7){
            MudaderVez();
            if(vez == "player1"){
                setB7("X");
                tabuleiro[2][0] = b7;
            }else{
                setB7("O");
                tabuleiro[2][0] = b7;
            }
        }
    }
    const handleClickB8 = (event) => {
        if(!b8){
            MudaderVez();
            if(vez == "player1"){
                setB8("X");
                tabuleiro[2][1] = b8;
            }else{
                setB8("O");
                tabuleiro[2][1] = b8;
            }
        }
    }
    const handleClickB9 = (event) => {
        if(!b9){
            MudaderVez();
            if(vez == "player1"){
                setB9("X");
                tabuleiro[2][2] = b9;
            }else{
                setB9("O");
                tabuleiro[2][2] = b9;
            }
        }
    }
    

    function MudaderVez(){
        if(vez == "player2"){
            setVez("player1");
        }else if (vez == "player1"){
            setVez("player2");
        }

    }

    function verificarJogo(){
        if(jogadasRestantes <= 4){
            for(let i =0; i > 2; i++){
                for(let j =0; j > 2; j++){
    
                    if(tabuleiro[i][j] == tabuleiro[i][j+1] && tabuleiro[i+1][j]){
                        console.log("foi")
                    }
    
                }
            }
        }
    }

    return(
        <View>
            <Text>
                Jogo
            </Text>
            <Button title='Voltar' onPress={handleClick}/>

            <Button title={b1} onPress={handleClickB1}/>
            <Button title={b2} onPress={handleClickB2}/>
            <Button title={b3} onPress={handleClickB3}/>
            <Button title={b4} onPress={handleClickB4}/>
            <Button title={b5} onPress={handleClickB5}/>
            <Button title={b6} onPress={handleClickB6}/>
            <Button title={b7} onPress={handleClickB7}/>
            <Button title={b8} onPress={handleClickB8}/>
            <Button title={b9} onPress={handleClickB9}/>
        </View>
    )
}