import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';



const GenderScreen = ({navigation}) => {
    return(
        <SafeAreaView contentContainerStyle={styles.container}>
            <Text style={styles.bold}>I am interested in</Text>
            <Text style={styles.text}>Men</Text>
            <Text style={styles.text}>Women</Text>
            <Text style={styles.text}>Nonbinary</Text>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        paddingLeft: 40,
        paddingVertical: 8
    },
    bold: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 13
    },
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 16,
        paddingBottom: 32,
    },
    sliderContainer: {
        paddingVertical: 16,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    vertical: {
      
    }
});


export default GenderScreen;