import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet, Image, Text, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario(){

        const {nome, email, senha} = this.props;

        this.props.cadastraUsuario({nome, email, senha});
    }

    renderBtnCadastro(){
        if(this.props.loading_cadastro){
            return(
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button title="Cadastrar" color="#115E54" onPress={() => this._cadastraUsuario()} />
        );
    }

    render(){
        return (
            <Image style={styles.imgBg} source={require('../imgs/bg.png')}>
                <View style={styles.viewTotal}>
                    <View style={styles.viewInput} >
                        <TextInput 
                            value={this.props.nome} 
                            placeholder="Nome" 
                            placeholderTextColor='#fff' 
                            style={styles.txtInput} 
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput 
                            value={this.props.email} 
                            placeholder="Email" 
                            placeholderTextColor='#fff' 
                            style={styles.txtInput} 
                            onChangeText={texto => this.props.modificaEmail(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            placeholder="Senha" 
                            placeholderTextColor='#fff' 
                            style={styles.txtInput} 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        />
                        <Text style={{color: '#ff0000', fontSize: 18}} >{this.props.erroCadastro}</Text>
                    </View>
                    <View style={styles.viewButton} >
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </Image>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
);

export default connect(
    mapStateToProps, 
    {
        modificaEmail, 
        modificaSenha, 
        modificaNome, 
        cadastraUsuario
    }
)(formCadastro);

const styles = StyleSheet.create({
    imgBg: {
        flex: 1,
        width: null
    },
    viewTotal: {
        flex: 1,
        padding: 10
    },
    viewInput: {
        flex: 4,
        justifyContent: 'center'
    },
    txtInput: {
        fontSize: 20,
        height: 45
    }, 
    viewButton: {
        flex: 1
    }
});