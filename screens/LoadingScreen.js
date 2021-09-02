import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { auth } from '../config/fire';

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }

    render() {
        return(
            <View styles={styles.container}>
                <Text>Loading..</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
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