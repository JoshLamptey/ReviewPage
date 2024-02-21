import {StyleSheet,View,Text} from 'react-native'

export default function Home(){
    return(
        <View style={style.container}>
            <Text>Home Page</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        padding:24
    },
    titleText:{
        fontFamily:'roboto-regular',
        fontSize:'38'
    }

}) 