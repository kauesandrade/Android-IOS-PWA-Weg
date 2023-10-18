import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseMemo from "./src/UseMemo";
import Home from "./src/Home"

export default function App() {

  return (
    <View style={styles.container}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={() => {
                        <View>
                            <Text>
                                Home
                            </Text>
                        </View>
                    }} />
                    <Stack.Screen name="UseMemo" component={UseMemo} />
                </Stack.Navigator>
            </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
