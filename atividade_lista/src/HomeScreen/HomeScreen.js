import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) =>{


    return(
        <View>
            <Button 
                title="Add Task"
                onPress={() => navigation.navigate("Add Task")}
            />
        </View>
    );

}

export default HomeScreen;