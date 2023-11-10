import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';
const AddItemScreen = ({ route, navigation }) => {

    const [itemName, setItemName] = useState('');
    const [IDItem, setIDItem] = useState();
    const [IDTask, setIDTask] = useState();
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);

    function sortTasksByDateDescending(tasks) {
        return tasks.sort((a, b) => {

            console.log(a)
            console.log(a.date)
            console.log(b)
            console.log(b.date)
            if(new Date(a.date) >= new Date(b.date)){
                console.log("asdasd")
                return -1
            }else{
                console.log("cu")
                return 1
            }
        });
    }

    useEffect(()=>{
        console.log(itemName)
    },[itemName])
    

    const focus = useIsFocused();
    useEffect(() => { setNameTask() }, [focus]);

    const handleClick = () => {
        saveName();
    }

    const setNameTask = async () => {
        if (route.params) {
            const { idTask, idItem } = route.params;
            setIDTask(idTask);
            const existingTaksJSON = JSON.parse(await AsyncStorage.getItem(metadata.TASK.TASK));
            setTasks(existingTaksJSON);
            setIDItem(idItem);
            if(idItem>=0){
                setItemName(existingTaksJSON[idTask].itens[idItem].itemName);
            }
            setTask[existingTaksJSON[idTask]];
        }
    }

    const saveName = async () => {

        if (IDItem >= 0) {
            tasks[IDTask].itens[IDItem].itemName = itemName;
            tasks[IDTask].itens[IDItem].date = new Date();
            tasks[IDTask].date = new Date();
            let sortItens = sortTasksByDateDescending(tasks[IDTask].itens);
            tasks[IDTask].itens = [...sortItens];
            let sortTasks = sortTasksByDateDescending(tasks);
            await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(sortTasks));
            voltar();

        }
        else {
            const newItem = {
                itemName: itemName,
                date: new Date()
            };
            try {
                const jsonData = (newItem);
                tasks[IDTask].itens = [...tasks[IDTask].itens, jsonData]
                tasks[IDTask].date = new Date().toLocaleString()
                await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(tasks));
                voltar();

            } catch (e) {
                console.log(e)
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