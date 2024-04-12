/* @flow */
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Pressable} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { useNavigation } from '@react-navigation/native';

const AgeScreen = ({navigation}) => (
    <SafeAreaView>
        <SliderContainer
        caption="Age range"
        sliderValue={[18, 30]}
        >
            <Slider
                animateTransitions
                maximumTrackTintColor="#d3d3d3"
                maximumValue={85}
                minimumTrackTintColor="#1fb28a"
                minimumValue={18}
                step={1}
                thumbTintColor="#1a9274"
            />
        </SliderContainer>

    </SafeAreaView>
);

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
        paddingBottom: 32,
        paddingTop: 30
    },
    sliderContainer: {
        paddingVertical: 16,
        marginHorizontal: 20
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 10
    },
    
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

export default AgeScreen;