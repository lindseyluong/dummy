import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';

const AuthenticateSpotify = () => {
    return(
        <SafeAreaView>
            <View style={{height:80}}/>
            <Entypo style={{textAlign:"center"}} name="spotify" size={80} color="black"/>
            <Text style={{
                    color: "black",
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center", 
                    marginTop: 40
                    }}>
                        Find love through music!
            </Text>
            <View style={{height:85}}/>
            <Pressable 
                style={{
                    backgroundColor:"#1DB954",
                    padding: 10,
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    width: 300,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
            }}
            >
                <Text>Sign in with Spotify</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default AuthenticateSpotify;