import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native"
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';
const AddItemScreen = ({ route, navigation }) => {

    const [IDItem, setIDItem] = useState();
    const [IDTask, setIDTask] = useState();
    const [itemName, setItemName] = useState('');
    const [tasks, setTasks] = useState([]);
    
    const focus = useIsFocused();
    useEffect(() => { setNameTask() }, [focus]);

    const handleClick = () => {
        saveName();
    }

    const setNameTask = async () => {
        if (route.params) {
            const { idTask, idItem } = route.params;
            const existingTaksJSON = JSON.parse(await AsyncStorage.getItem(metadata.TASK.TASK));
            setTasks([...existingTaksJSON]);
            setIDItem(idItem);
            setIDTask(idTask);
            if(idItem>=0){
                setItemName(existingTaksJSON[idTask].itens[idItem].itemName);
            }
        }
    }

    const saveName = async () => {

        if (IDItem >= 0) {

            if(tasks[IDTask].itens[IDItem].itemName != itemName){
                tasks[IDTask].itens[IDItem].itemName = itemName;
                tasks[IDTask].itens[IDItem].date = new Date();
                tasks[IDTask].date = new Date();
                await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(tasks));
            }
            voltar();

        }
        else {
            if(itemName){
                const newItem = {
                    itemName: itemName,
                    date: new Date()
                };
                try {
                    const jsonData = (newItem);
                    tasks[IDTask].itens = [...tasks[IDTask].itens, jsonData];
                    tasks[IDTask].date = new Date();
                    await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(tasks));
                    voltar();
    
                } catch (e) {
                    console.log(e);
                }
            }else{
                Alert.alert("Inexistent name", "Enter a name to add the item");
            }
            
        }
    }

    const voltar = () => {
        navigation.navigate("Task", { idTask: IDTask });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Add/Edit ItemScreen
            </Text>
            <TextInput style={styles.textInput} placeholder="Name from My new Item" value={itemName} onChangeText={setItemName} />
            <Button style={styles.button} title={IDItem >= 0 ? "Edit" + " Task": "Add" + " Task"} onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
    textInput: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {

    }
  });

export default AddItemScreen;