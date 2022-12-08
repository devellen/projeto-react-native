import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CadastroScreen from './screens/Cadastro';

//necessario para a configuração de rota
const Stack = createNativeStackNavigator();
function App() {
    return (
        //configuração da rota
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;