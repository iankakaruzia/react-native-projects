import React, {Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {modificaEmail, modificaSenha, autenticarUsuario} from '../actions/AutenticacaoActions';

class formLogin extends Component {

    _autenticarUsuario(){
        const {email, senha} = this.props;

        this.props.autenticarUsuario({email, senha});
    }

    renderBtnAcessar(){
        if(this.props.loading_login){
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
        );
    }

    render(){
        return (
            <Image style={styles.imgBg} source={require('../imgs/bg.png')} >
                <View style={styles.viewTotal}>
                    <View style={styles.viewTitulo}>
                        <Text style={styles.txtTitulo}>Whatsapp Clone</Text>
                    </View>
                    <View style={styles.viewForm}>
                        <TextInput 
                            value={this.props.email} 
                            style={styles.inputForm} 
                            placeholder='Email' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaEmail(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={styles.inputForm} 
                            placeholder='Senha' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        /> 
                        <Text style={{color: '#ff0000', fontSize: 18}}>{this.props.erroLogin}</Text>
                        <TouchableHighlight onPress={() => Actions.formCadastro() }>
                            <Text style={styles.txtForm} >Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.viewButton}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </Image>
            
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin);

const styles = StyleSheet.create({
    imgBg: {
        flex: 1,
        width: null
    },
    viewTotal: {
        flex: 1,
        padding: 10
    },
    viewTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        color: '#fff'
    },
    viewForm: {
        flex: 2
    },
    inputForm: {
        fontSize: 20,
        height: 45
    },
    txtForm: {
        fontSize: 20,
        color: '#fff'
    },
    viewButton: {
        flex: 2
    }
});