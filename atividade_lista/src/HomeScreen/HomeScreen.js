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
        const tasks = JSON.parse(await AsyncStorage.getItem(metadata.TASK.TASK));
        console.log(tasks)
        console.log()
        setTasks(tasks);
    }

    const array = useMemo(()=>{
        console.log("Passou pelo use Memo")
        return(
            <View>
                {

                    tasks.map((index, i)=> {
                        console.log("Passou no map")
                        return(
                            <View>
                                <Text>
                                    TASK {i}º: {tasks[i].taskName} - {tasks[i].date} 
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }, []);

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