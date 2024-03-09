import React  from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {globalStyles} from '../styles/global'

export default function Home(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>I am not going to lie to you the Shege my eyes haf seen</Text>
            <Text>This is in default font</Text>
        </View>
    )
}
