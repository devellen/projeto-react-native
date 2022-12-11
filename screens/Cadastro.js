import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Input, Button } from 'react-native-elements';


const CadastroScreen = ({ navigation }) => {


    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();

    async function inserirCadastro() {

        await axios.post('http://192.168.37.107/',
            {
            email: getEmail,
            senha: getSenha
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
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 4, alignItems: "center", paddingTop: 40 }}></View>
            <View style={{ flex: 2, padding: 20 }}>
                <TextInput
                    placeholder="digite seu email"
                    style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin: 15 }}
                    onChangeText={text => setEmail(text)}
                    value={getEmail} />
                <TextInput
                    placeholder="digite sua senha"
                    style={{ height: 40, width: 300, borderColor: '#8f8fcb', borderWidth: 1, borderRadius: 20, margin: 15 }}
                    onChangeText={text => setSenha(text)}
                    value={getSenha} />
            </View>
            <View style={{ flex: 4, padding: 60 }}>
                <Button
                    onPress={() => inserirCadastro()}
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