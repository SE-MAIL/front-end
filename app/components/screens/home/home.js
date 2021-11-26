import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Home({ navigation }) {
    return(
        <View style={{flexDirection: 'row'}}>
            <Text>
                hello
            </Text>
            <Text>
                goodbye
            </Text>
            <TouchableOpacity style={{width: 100, height: 100, backgroundColor: 'pink'}} onPress={()=>navigation.navigate('Login')}>
                <Text>
                    go to login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;