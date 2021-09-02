import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../config/fire';

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password:"",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: "Email não cadastrado ou senha incorretos" }));
    }

    render() {
        return(
            <View styles={styles.container}>
                <Text style={styles.greeting}>
                    {'Ola Novamente.\nBem vindo de volta.'}
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
                            Endereço de Email
                        </Text>
                        <TextInput style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}>
                        </TextInput>
                    </View>

                    <View>
                        <Text style={{ marginTop: 32 }}>
                            Senha
                        </Text>
                        <TextInput style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}>
                        </TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{ color: "#FFF", fontWeight: "500" } }>
                            Logar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf:"center", marginTop: 32 }} 
                        onPress={() => this.props.navigation.navigate("Registrar")}
                    >
                        <Text style={{ color: "#414989", fontSize: 13 }}>
                            Registrar
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
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    erroMessage: {
        height: 72,
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
        marginBottom: 48,
        marginHorizontal: 30,
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
    },
    button: {
        marginHorizontal: 38,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
})