import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';

const AddTaskScreen = ({ route, navigation }) => {

    if(route.params){
        const { id } = route.params ;
    }
    
    const [taskName, setTaskName] = useState('');

    useEffect(() => { 
        console.log(taskName) 
        console.log("ID: " + id) 
    }, [taskName])

    const handleClick = () => {
        saveName();
    }

    const saveName = async () => {
        const newTask = {
            taskName: taskName,
            itens: [],
            date: new Date().toLocaleString()
        };
        try {
            const jsonData = (newTask);
            let existingTaks = await AsyncStorage.getItem(metadata.TASK.TASK);
            let existingTaksJSON = existingTaks ? JSON.parse(existingTaks) : [];
            const updatedTaks = [...existingTaksJSON, jsonData];
            await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(updatedTaks));

            // console.log(jsonData.date);
            // console.log(jsonData.itens);
            // console.log(jsonData.taskName);

            voltar();
        } catch (e) {
            console.log(e)
        }
    }

    const voltar = () => {
        navigation.navigate("Home")
    }

    return (
        <View>
            <Text>
                Add/Edit TaskScreen
            </Text>
            <TextInput placeholder="Name from My new list" value={taskName} onChangeText={setTaskName} />
            <Button title="Add Task" onPress={handleClick} />
        </View>
    )
}

export default AddTaskScreen;