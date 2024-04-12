/* @flow */
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Pressable} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { useNavigation } from '@react-navigation/native';

const ReligionScreen = ({navigation}) => (

        <SafeAreaView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Agnostic</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Atheist</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Buddhist</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Catholic</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Christian</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Hindu</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Jewish</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Muslim</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Sikh</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Text style={styles.text}>Spiritual</Text>
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

export default ReligionScreen;