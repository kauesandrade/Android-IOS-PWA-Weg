import { View, Text} from "react-native"

const TaskScreen = () => {
    return(
        <View>
            <Text>
                TaskScreen
            </Text>
            <Button 
                title="Add Item"
                onPress={() => navigation.navigate("Add Item")}
            />
        </View>
    )
}

export default TaskScreen;