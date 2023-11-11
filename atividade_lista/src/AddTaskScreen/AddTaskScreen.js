import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';

const AddTaskScreen = ({ route, navigation }) => {

    const [IDTask, setIDTask] = useState();
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);

    const focus = useIsFocused();
    useEffect(() => { setNameTask() }, [focus]);

    const handleClick = () => {
        saveName();
    }

    const setNameTask = async () => {
        const existingTaksJSON = JSON.parse(await AsyncStorage.getItem(metadata.TASK.TASK));
        setTasks([...existingTaksJSON]);
        if (route.params) {
            const { idTask } = route.params;
            setIDTask(idTask);
            setTaskName(existingTaksJSON[idTask].taskName);

        }
        
    }

    const saveName = async () => {

        if (IDTask >= 0) {
            if(tasks[IDTask].taskName != taskName){
                tasks[IDTask].date = new Date();
                tasks[IDTask].taskName = taskName;
                await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(tasks));
            }
            voltar();
            
        } 
        else {
            const newTask = {
                taskName: taskName,
                itens: [],
                date: new Date()
            };
            try {
                const jsonData = (newTask);
                const updatedTaks = [...tasks, jsonData];
                await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(updatedTaks));
                voltar();

            } catch (e) {
                console.log(e);
            }

        }

    }

    const voltar = () => {
        navigation.navigate("Home");
    }

    return (
        <View>
            <Text>
                Add/Edit TaskScreen
            </Text>
            <TextInput placeholder="Name from My new list" value={taskName} onChangeText={setTaskName} />
            <Button title={IDTask >= 0 ? "Edit" + " Task": "Add" + " Task"} onPress={handleClick} />
        </View>
    )
}

export default AddTaskScreen;