import { useEffect, useState, useMemo } from "react";
import { Button, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import metadata from './../storage.medata.json';
// await AsyncStorage.removeItem(metadata.TASK.TASK);

const HomeScreen = ({ navigation }) =>{
    const [tasks, setTasks] = useState([]);
    const focus = useIsFocused();
    useEffect(() => { getTasks() }, [focus]);

    const getTasks = async () =>{
        // await AsyncStorage.removeItem(metadata.TASK.TASK);
        const tasks = JSON.parse(await AsyncStorage.getItem(metadata.TASK.TASK));
        console.log(tasks)
        setTasks(tasks);
    }

    const array = useMemo(()=>{
        if(tasks){
            return(
                <View>
                    {
                        tasks.map((index, i)=> {
                            return(
                                <View>
                                    <Text>
                                        TASK {i + 1}º: {tasks[i].taskName} - {tasks[i].date}
                                    </Text>
                                    <Button  title="Editar" onPress={() => navigation.navigate("Add Task", {id: i})}/>
                                    <Button  title="Remover" />
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
            <Button 
                title="Add Task"
                onPress={() => navigation.navigate("Add Task")}
            />

            {array}

        </View>
    );

}

export default HomeScreen;