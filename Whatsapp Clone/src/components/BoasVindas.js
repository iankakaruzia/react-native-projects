import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default props => (
    <Image style={styles.imgBg} source={require('../imgs/bg.png')}>
        <View style={styles.viewTotal}>
            <View style={styles.viewMessage}>
                <Text style={styles.txtMessage}>Seja Bem-Vindo</Text>
                <Image source={require('../imgs/logo.png')} />
            </View>
            <View style={styles.viewBtn}>
                <Button title="Fazer Login" onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </Image>
);

const styles = StyleSheet.create({
    imgBg: {
        flex: 1,
        width: null
    },
    viewTotal: {
        flex: 1,
        padding: 15
    },
    viewMessage: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtMessage: {
        fontSize: 20,
        color: '#fff'
    },
    viewBtn: {
        flex: 1
    }
});