/* @flow */
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Pressable} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { useNavigation } from '@react-navigation/native';



const thumbImage = require('./thumb.png');

const DEFAULT_VALUE = 0.2;

const CustomThumb = () => (
    <View style={componentThumbStyles.container}>
        <Text>Any</Text>
    </View>
);


const SliderContainer = (props: {
    caption: string;
    children: React.ReactElement;
    sliderValue?: Array<number>;
    trackMarks?: Array<number>;
    vertical?: boolean;
}) => {
    const {caption, sliderValue, trackMarks} = props;
    const [value, setValue] = React.useState(
        sliderValue ? sliderValue : DEFAULT_VALUE,
    );
    let renderTrackMarkComponent: React.ReactNode;

    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        renderTrackMarkComponent = (index: number) => {
            const currentMarkValue = trackMarks[index];
            const currentSliderValue =
                value || (Array.isArray(value) && value[0]) || 0;
            const style =
                currentMarkValue > Math.max(currentSliderValue)
                    ? trackMarkStyles.activeMark
                    : trackMarkStyles.inactiveMark;
            return <View style={style} />;
        };
    }

    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child: React.ReactElement) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: setValue,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }

                return child;
            },
        );
    };

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.titleContainer}>
                <Text>{caption}</Text>
                <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
            </View>
            {renderChildren()}
        </View>
    );
};



const PreferencesPage = ({navigation}) => (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Filter whose profiles you would like to see:</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate('Gender')
                }}
                style= {({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    width: 360,
                    height: 50,
                    justifyContent: 'center',
                    padding: 5
                    
        
                }
                ]}>
                {({pressed}) => (
                <Text style={buttonTextStyle.text}>Gender</Text>
                )}
            </Pressable>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

            </View>

            <Pressable
                onPress={() => {
                    navigation.navigate('Age')
                }}
                style= {({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    width: 360,
                    height: 50,
                    justifyContent: 'center',
                    padding: 5
                    
        
                }
                ]}>
                {({pressed}) => (
                <Text style={buttonTextStyle.text}>Age</Text>
                )}
            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

            </View>

            <Pressable
                onPress={() => {
                    navigation.navigate('Distance')
                }}
                style= {({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    width: 360,
                    height: 50,
                    justifyContent: 'center',
                    padding: 5
                    
        
                }
                ]}>
                {({pressed}) => (
                <Text style={buttonTextStyle.text}>Distance</Text>
                )}
            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

            </View>

            <Pressable
                onPress={() => {
                    navigation.navigate('Religion')
                }}
                style= {({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    width: 360,
                    height: 50,
                    justifyContent: 'center',
                    padding: 5
                    
        
                }
                ]}>
                {({pressed}) => (
                <Text style={buttonTextStyle.text}>Religion</Text>
                )}
            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

            </View>

            <Pressable
                onPress={() => {
                    navigation.navigate('Ethnicity')
                }}
                style= {({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    width: 360,
                    height: 50,
                    justifyContent: 'center',
                    padding: 5
                    
        
                }
                ]}>
                {({pressed}) => (
                <Text style={buttonTextStyle.text}>Ethnicity</Text>
                )}
            </Pressable>




        </ScrollView>

    </SafeAreaView>



);

const buttonTextStyle = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 20,
        alignContent: 'center'
    },
    container: {


    }
})

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 16,
        paddingBottom: 50,
    },
    sliderContainer: {
        paddingVertical: 16,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 20,
        paddingBottom: 20,
        
    }
});



const componentThumbStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        width: 100,
    },
});

const borderWidth = 4;
const trackMarkStyles = StyleSheet.create({
    activeMark: {
        borderColor: 'red',
        borderWidth,
        left: -borderWidth / 2,
    },
    inactiveMark: {
        borderColor: 'grey',
        borderWidth,
        left: -borderWidth / 2,
    },
});

export default PreferencesPage;