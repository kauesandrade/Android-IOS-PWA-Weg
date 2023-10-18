import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native-web';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UseMemo from "./src/UseMemo";

export default function Home({
    changeScreen
}) {

    return (
        <View style={styles.div} >
            <Text>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    div: {
        gap: 3
    }
})