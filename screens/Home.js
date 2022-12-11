import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Input, Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 4, alignItems: "center", paddingTop: 40 }}>
                <Avatar
                    avatarStyle={styles.avatar}
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                            'https://img2.gratispng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg',
                    }}
                />
            </View>
            <View style={{ flex: 2, padding: 20 }}>
                <Input
                    placeholder='Login'
                />
                <Input
                    placeholder='Senha'
                    secureTextEntry
                />
            </View>
            <View style={{ flex: 4, padding: 60 }}>
                <Button
                    onPress={() => navigation.navigate('Listar')}
                    buttonStyle={styles.button}
                    title="Entrar"
                />
                <Button
                    onPress={() => navigation.navigate('Cadastro')}
                    buttonStyle={styles.button}
                    title="Cadastre-se"
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

export default HomeScreen;