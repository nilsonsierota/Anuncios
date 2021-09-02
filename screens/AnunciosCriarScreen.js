import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth, database } from '../config/fire';

export default class AnunciosCriarScreen extends React.Component {
    state = {
        titulo: "",
        descricao: "",
        valor: "",
        telefone: "",
        email:""
    }

    criarAnuncio = () => {
        const { titulo, descricao, valor, telefone, email } = this.state;

        database.collection('anuncios').add({          
            titulo: titulo, 
            descricao: descricao, 
            valor: valor, 
            telefone: telefone, 
            email: email 
        }).then(error => this.setState({ errorMessage: "Anuncio Criado" }))
        .catch(error => this.setState({ errorMessage: "Algo errado" }));
    }

    render() {
        return(
            <View styles={styles.container}>
            <Text style={styles.greeting}>
                {'Criar Anuncio'}
            </Text>

            <View style={styles.erroMessage}>
                {this.state.errorMessage && 
                <Text style={styles.error}>
                    {this.state.errorMessage}
                </Text>}
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>
                        Titulo do Anuncio
                    </Text>
                    <TextInput style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={titulo => this.setState({ titulo })}
                        value={this.state.titulo}>
                    </TextInput>
                </View>     
                <View>
                    <Text style={styles.inputTitle}>
                        Descricao do Anuncio
                    </Text>
                    <TextInput style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={descricao => this.setState({ descricao })}
                        value={this.state.descricao}>
                    </TextInput>
                </View> 
                <View>
                    <Text style={styles.inputTitle}>
                        Valor do Anuncio
                    </Text>
                    <TextInput style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={valor => this.setState({ valor })}
                        value={this.state.valor}>
                    </TextInput>
                </View> 
                <View>
                    <Text style={styles.inputTitle}>
                        Telefone para Contato
                    </Text>
                    <TextInput style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={telefone => this.setState({ telefone })}
                        value={this.state.telefone}>
                    </TextInput>
                </View> 
                <View>
                    <Text style={styles.inputTitle}>
                        Email para contato
                    </Text>
                    <TextInput style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}>
                    </TextInput>
                </View> 

                <TouchableOpacity style={styles.button} onPress={this.criarAnuncio}>
                    <Text style={{ color: "#FFF", fontWeight: "500" } }>
                        Concluir
                    </Text>
                </TouchableOpacity>               
            </View>
        </View>  
        );      
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    greeting: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    erroMessage: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 38,
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    form: {
        marginBottom: 10,
        marginHorizontal: 10,
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginBottom: 20
    },
    button: {
        margin: 10,
        marginHorizontal: 38,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
})