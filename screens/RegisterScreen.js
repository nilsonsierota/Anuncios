import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../config/fire';

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password:"",
        errorMessage: null
    };

    handleSignUp = () => {
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: "Houve algum problema" }));
    }

    render() {
        return(
            <View styles={styles.container}>
                <Text style={styles.greeting}>
                    {'Ola!.\nCadastre-se para começar.'}
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
                            Nome Completo
                        </Text>
                        <TextInput style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}>
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
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

                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={{ color: "#FFF", fontWeight: "500" } }>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf:"center", marginTop: 32 }}
                        onPress={() => this.props.navigation.navigate("Logar")}>
                        <Text style={{ color: "#414989", fontSize: 13 }}>
                            Logar
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