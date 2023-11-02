import { useEffect, useState, useMemo } from "react";
import { View, Text, TextInput, Button } from "react-native"
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';

const TaskScreen = ({ route, navigation }) => {

    const { id } = route.params;
    const [ID, setID] = useState(0);
    const [itens, setItens] = useState([])
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState("");

    const focus = useIsFocused();
    useEffect(() => { getTasks() }, [focus]);

    const getTasks = async () =>{
        if (route.params) {
            const { id } = route.params;
            setID(id);
            let existingTaks = await AsyncStorage.getItem(metadata.TASK.TASK);
            let existingTaksJSON = existingTaks ? JSON.parse(existingTaks) : [];
            setTaskName(existingTaksJSON[id].taskName);
            setTasks(existingTaksJSON);
            setItens(existingTaksJSON[id].itens);
        }
    }

    const deleteItem = async (i) =>{
        itens.splice(i, 1);
        tasks[ID].itens = itens
        await AsyncStorage.setItem(metadata.TASK.TASK, JSON.stringify(tasks));
        getTasks();
    }

    const array = useMemo(()=>{
        if(itens){
            return(
                <View>
                    {
                        itens.map((index, i)=> {
                            return(
                                <View>
                                    <Text>
                                        TASK {i + 1}º: {itens[i].taskName} - {itens[i].date}
                                    </Text>
                                    <Button  title="Editar" onPress={() => navigation.navigate("Add Task", {id: i, idTask: ID})}/>
                                    <Button  title="Remover" onPress={() => deleteItem(i)}/>
                                </View>
                            )
                        })
                    }
                </View>
            )
        }else{
            return(
                <View>
                    
                </View>
            )
        }
       
    }, [tasks]);

    return(
        <View>
            <Text>
                TaskScreen: {taskName}
            </Text>
            <Button 
                title="Add Item"
                onPress={() => navigation.navigate("Add Item", {ID: i})}
            />
            {array}
        </View>
    )
}

export default TaskScreen;