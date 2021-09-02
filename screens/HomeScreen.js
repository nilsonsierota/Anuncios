import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../config/fire';

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = auth.currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        auth.signOut();
    }

    render() {
        return(
            <View styles={styles.container}>
                <Text style={{ marginTop: 100 }}>Ola {this.state.displayName} {this.state.email}!</Text>

                <TouchableOpacity style={{ marginTop: 32 }} 
                    onPress={() => this.props.navigation.navigate("Anuncios")}>
                    <Text>
                        Criar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>
                        Deslogar
                    </Text>
                </TouchableOpacity>
            </View>
        );      
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
})