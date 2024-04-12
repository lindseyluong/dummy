import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
    const navigation = useNavigation();

    const handleNext = () => {
        // Navigate to the next screen
        navigation.navigate('Gender');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop: 90, marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 22,
                            borderColor: 'black',
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <MaterialCommunityIcons
                            name="cake-variant-outline"
                            size={26}
                            color="black"
                        />
                    </View>
                    <Image
                        style={{ width: 100, height: 40 }}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        fontFamily: 'GeezaPro-Bold',
                        marginTop: 15,
                    }}>
                    Where do you live?
                </Text>
                <TouchableOpacity
                    onPress={handleNext}
                    activeOpacity={0.8}
                    style={{ marginTop: 20, marginLeft: 'auto' }}>
                    <MaterialCommunityIcons
                        name="arrow-right-circle"
                        size={45}
                        color="#581845"
                        style={{ alignSelf: 'center', marginTop: 20 }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LocationScreen;

const styles = StyleSheet.create({});
