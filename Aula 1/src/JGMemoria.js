import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native-web';
import { useEffect, useState } from 'react';

const numPares = 25
const cardsArray = Array(numPares * 2)
  .fill(null)
  .map((_, index) => index);
const enbaralharArr = (array) => array.sort(() => Math.random() - 0.5);

export default function({
    changeScreen,
    player1,
    player2
}){
    const [cards, setCards] = useState([]);
    const [cardsArr, setCardsArr] = useState({cardId: 1, ok: false},
        {cardId: 2, ok: false},
        {cardId: 3, ok: false});
    const [cardsSelecionados, setCardsSelecionados] = useState([]);
    const [playerVez, setPlayerVez] = useState("1");

    const iniciarJogo = () =>{

        const criadoArray = criarArray(cardsArr);
        setCardsArr = (criadoArray);
        setCards = ([...cardsArr, ...cardsArr])
        setCardsSelecionados([])
        setPlayerVez("1")
    }

    useEffect(() =>{
        iniciarJogo();
    },[]);

    const handlepress = (cardIndex) =>{
        if(cardsSelecionados == 1){
            return;
        }
        
        setCardsSelecionados[[...cardsSelecionados, cardIndex]]

        if(cardsSelecionados.length == 2){
            if(cards[cardsSelecionados[0]] === cardIndex){

            }
        }
    }


 const cardContainer = () =>{
    return cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleCardPress(index)}
          disabled={selectedCards.includes(index)}
        >
          <Text style={styles.cardText}>
            {selectedCards.includes(index) || card === null ? ' ' : String(card)}
          </Text>
        </TouchableOpacity>
    ));
  
 }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  players: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  player: {
    fontSize: 18,
  },
  activePlayer: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  card: {
    width: 60,
    height: 60,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  cardText: {
    fontSize: 20,
  },
  resetButton: {
    marginTop: 20,
  },
});