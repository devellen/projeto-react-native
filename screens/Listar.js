import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, ListItem, Header } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function ListaScreen({ route, navigation }) {


    const [list, setList] = useState([]);
    const refresh = useIsFocused();

    useEffect(() => {
        function consultarDados() {

            axios.get('http://professornilson.com/testeservico/clientes')

                .then(function (response) {
                    setList(response.data);
                }).catch(function (error) {
                    console.log(error);

                });

        }
        consultarDados();
    }, [refresh])

    return (
        <View>
            <Header
                centerComponent={{ text: 'Lista', style: { color: '#fff'} }}
                rightComponent={<Button
                    title="+"
                    onPress={() => navigation.navigate('Inserir')} />}
            />
            <ScrollView>
                {
                    list.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Alterar',
                            {
                                nome: l.nome,
                                telefone: l.telefone,
                                email: l.email,
                                id: l.id
                            })}>
                            <Avatar source={{ uri: "https://img2.gratispng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg" }} />
                            <ListItem.Content>
                                <ListItem.Title>{l.nome}</ListItem.Title>
                                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
    )
}

