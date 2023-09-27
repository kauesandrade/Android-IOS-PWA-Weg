import { View, Text, Button } from 'react-native-web';
import { useState } from 'react';

export default function Jogo(props){

    const [vez, setVez] = useState("player1");

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
            }else{
                setB1("O")
            }
        }
    }
    const handleClickB2 = (event) => {
        if(!b2){
            MudaderVez();
            if(vez == "player1"){
                setB2("X");
            }else{
                setB2("O")
            }
        }
    }
    const handleClickB3 = (event) => {
        if(!b3){
            MudaderVez();
            if(vez === "player1"){
                setB3("X");
            }else{
                setB3("O")
            }
        }
    }
    const handleClickB4 = (event) => {
        if(!b4){
            MudaderVez();
            if(vez == "player1"){
                setB4("X");
            }else{
                setB4("O")
            }
        }
    }
    const handleClickB5 = (event) => {
        if(!b5){
            MudaderVez();
            if(vez == "player1"){
                setB5("X");
            }else{
                setB5("O")
            }
        }
    }
    const handleClickB6 = (event) => {
        if(!b6){
            MudaderVez();
            if(vez == "player1"){
                setB6("X");
            }else{
                setB6("O")
            }
        }
    }
    const handleClickB7 = (event) => {
        if(!b7){
            MudaderVez();
            if(vez == "player1"){
                setB7("X");
            }else{
                setB7("O")
            }
        }
    }
    const handleClickB8 = (event) => {
        if(!b8){
            MudaderVez();
            if(vez == "player1"){
                setB8("X");
            }else{
                setB8("O")
            }
        }
    }
    const handleClickB9 = (event) => {
        if(!b9){
            MudaderVez();
            if(vez == "player1"){
                setB9("X");
            }else{
                setB9("O")
            }
        }
    }

    const matriz = [3][3];
    
    matriz[0] = [b1, b2, b3];
    

    function MudaderVez(){
        if(vez == "player2"){
            setVez("player1");
        }else if (vez == "player1"){
            setVez("player2");
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