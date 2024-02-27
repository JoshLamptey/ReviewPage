import {StyleSheet,View,Text} from 'react-native'

export default function Home(){
    return(
        <View style={style.container}>
            <Text style={style.titleText}>I am not going to lie to you the Shege my eyes haf seen</Text>
            <Text>This is in default font</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        padding:50
    },
    titleText:{ 
        color:'green',
        fontFamily:'Roboto Medium'
        
    }

}) 