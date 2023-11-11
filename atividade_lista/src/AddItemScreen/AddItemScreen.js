import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
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
        }
    }

    const voltar = () => {
        navigation.navigate("Task", { idTask: IDTask });
    }

    return (
        <View>
            <Text>
                Add/Edit ItemScreen
            </Text>
            <TextInput placeholder="Name from My new Item" value={itemName} onChangeText={setItemName} />
            <Button title={IDItem >= 0 ? "Edit" + " Task": "Add" + " Task"} onPress={handleClick} />
        </View>
    )
}

export default AddItemScreen;