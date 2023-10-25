import { View, Text, TextInput } from "react-native"

const AddItemScreen = () => {

    const [itemName, setItemName] = useState('');

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