import  React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { database, auth  } from '../config/fire';
import { ScrollView } from 'react-native-gesture-handler';

const AnunciosUsuarioScreen = () => {
    const [data, setData] = useState([]);
    const table = 'anuncios';

        useEffect(() => {
            database
                .collection(table)
                .onSnapshot((query) => {
                    const items = [];
                    query.forEach((doc) => {
                        items.push({ ...doc.data(), id: doc.id});
                    });

                    setData(items);  
                })
        }, []);            
        
        return(
            <SafeAreaView>  
                <FlatList 
                    data={data}
                    renderItem = {({item}) => {
                        return(
                            <View styles={styles.item}>
                                <Text styles={styles.text}>{item.titulo}</Text>
                                <Text styles={styles.text}>{item.descricao}</Text> 
                                <Text styles={styles.text}>{item.valor}</Text> 
                                <Text styles={styles.text}>{item.telefone}</Text> 
                                <Text styles={styles.text}>{item.email}</Text> 
                            </View>                            
                        )
                    }}
                />       
            </SafeAreaView>
        ); 
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#333333",      
        marginTop: 30,
        justifyContent: 'center'
    },
    text: {
        color: "#333333"
    }
})

export default AnunciosUsuarioScreen;