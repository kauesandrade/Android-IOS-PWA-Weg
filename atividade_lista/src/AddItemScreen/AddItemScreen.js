import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';
const AddItemScreen = ({ route, navigation }) => {

    const [itemName, setItemName] = useState('');
    const [IDItem, setIDItem] = useState(0);
    const [IDTask, setIDTask] = useState(0);

    const setNameTask = async () => {
        if (route.params) {
            const { id, idTask } = route.params;
            setIDItem(id);
            setIDTask(idTask);
            let existingTaks = await AsyncStorage.getItem(metadata.TASK.TASK);
            let existingTaksJSON = existingTaks ? JSON.parse(existingTaks) : [];
            setTaskName(existingTaksJSON[id].taskName);
        }
    }

    return(
        <View>
            <Text>
                Add/Edit ItemScreen
            </Text>
            <TextInput placeholder="Name from My new Item" value={itemName} onChangeText={setItemName}/>
        </View>
    )
}

export default AddItemScreen;