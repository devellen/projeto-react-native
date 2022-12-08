import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CadastroScreen = ({navigation}) => {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 4, alignItems: "center", paddingTop: 40 }}></View>
            <View style={{ flex: 2, padding: 20 }}>
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Senha'
                />
            </View>
            <View style={{ flex: 4, padding: 60 }}>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    buttonStyle={styles.button}
                    title="Salvar"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    button: {
        borderRadius: 40,
        margin: 10,
        backgroundColor: "#8f8fcb"
    }
});

export default CadastroScreen;