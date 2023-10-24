import { View, Text, Button } from 'react-native';

const HomeScreen = () =>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button 
          title='Go to User Data' 
          onPress={() => navegation.navegate("UserData")}
          />
        </View>
      );
}


export default HomeScreen;