import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput} from "react-native";
import { Button, Header } from 'react-native-elements';
import axios from "axios";
import FlashMessage, {showMessage} from "react-native-flash-message";

export default function AlterarScreen({ route, navigation }) {


    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getEmail, setEmail] = useState();
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { telefone } = route.params;
            const { email } = route.params;
            const { id } = route.params;

            setNome(nome);
            setTelefone(telefone);
            setEmail(email);
            setId(id);
        }
    }, [])


    function alterarDados() {

        axios.put('http://professornilson.com/testeservico/clientes/' + getId,
            {
                nome: getNome,
                telefone: getTelefone,
                cpf: getEmail
            }).then(function (response) {
                showMessage({
                    message: "Registro alterado com sucesso",
                    type: "success",
                });
            }).catch(function (error) {
                console.log(error);

            });
    }

    function excluirDados() {

        axios.delete('http://professornilson.com/testeservico/clientes/' + getId)
            .then(function (response) {
                showMessage({
                    message: "Registro excluído com sucesso",
                    type: "danger",
                });
                setNome(null);
                setTelefone(null);
                setEmail(null);
                setId(null);
            }).catch(function (error) {
                console.log(error);

            });
    }

    return (
        <View style={{ alignItems: 'center' }}>

            <FlashMessage position="top" />


            <TextInput
                style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin:15, marginTop:80, color:"#8f8fcb" }}
                onChangeText={text => setNome(text)}
                value={getNome} />


            <TextInput
                style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin:15, color:"#8f8fcb" }}
                onChangeText={text => setEmail(text)}
                value={getEmail} />

            <TextInput
                style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin:15, color:"#8f8fcb"  }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone} />

            <Button title="alterar"
                buttonStyle={{ width: 300, marginTop: 20, borderRadius: 20, backgroundColor: "#8f8fcb" }}
                onPress={() => alterarDados()} />

            <Button title="excluir"
                buttonStyle={{ width: 300, marginTop: 20, borderRadius: 20, backgroundColor: "#8f8fcb" }}
                onPress={() => excluirDados()} />
        </View>
    )
}
