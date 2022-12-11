import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, Header } from 'react-native-elements';


import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function InserirScreen({ route, navigation }) {


    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getEmail, setEmail] = useState();


    async function inserirDados() {

        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            telefone: getTelefone,
            email: getEmail
        }).then(function (response) {
            showMessage({
                message: "Registro salvo com sucesso",
                type: "success",
            });
        }).catch(function (error) {
            console.log(error);

        });
    }

    return (
        <View style={{ alignItems: 'center' }}>

            <FlashMessage position="top" />

            <Text
            style={{marginTop:50}}
            > Insira seus Dados</Text>

            <TextInput
                placeholder="digite seu nome"
                style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin:15, marginTop:80 }}
                onChangeText={text => setNome(text)}
                value={getNome} />


            <TextInput
                placeholder="digite seu email"
                style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin:15 }}
                onChangeText={text => setEmail(text)}
                value={getEmail} />


            <TextInput
                placeholder="digite seu telefone"
                style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin:15 }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone} />

            <Button title="salvar dados"
                buttonStyle={{ width: 300, marginTop: 15, borderRadius: 20, backgroundColor: "#8f8fcb" }}
                onPress={() => inserirDados()}>
            </Button>
        </View>
    )
}
