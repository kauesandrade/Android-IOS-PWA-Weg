import { useState } from "react";
import { View, Text, TextInput, Button  } from "react-native"
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import metadata from './../storage.medata.json';

const AddTaskScreen = () => {

    const [taskName, setTaskName] = useState('');

    // useState(() => { saveName() }, [taskName]);

    const saveName = async () =>{
        console.log(taskName)
    }

    return(
        <View>
            <Text>
                Add/Edit TaskScreen
            </Text>
            <TextInput placeholder="Name from My new list" value={taskName} onChangeText={setTaskName}/>
            <Button title="Add Task" onPress={saveName()}/>
        </View>
    )
}

export default AddTaskScreen;