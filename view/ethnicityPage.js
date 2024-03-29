/* @flow */
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Pressable} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { useNavigation } from '@react-navigation/native';

const EthnicityScreen = ({navigation}) => (

        <SafeAreaView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Black/African Descent</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>East Asian</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Hispanic/Latino</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Middle Eastern</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Native American</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Pacific Islander</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>South Asian</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Southeast Asian</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>White/Caucasian</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Other</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Open to all</Text>

        </SafeAreaView>


);

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        paddingLeft: 40,
        paddingVertical: 10,
        paddingTop: 18,
        paddingBottom: 18
    },
    bold: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 20
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

export default EthnicityScreen;