import { StatusBar } from 'expo-status-bar';
import  {useState } from 'react';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import Home from './screens/home';


function getFonts(){
  return Font.loadAsync({
    'roboto-Regular':require('./assets/Font/Roboto-Regular.ttf'),
    'roboto-medium':require('./assets/Font/Roboto-Medium.ttf'),

  })
}

export default function App() {
  const  [fontsLoaded,setFontsLoaded] = useState(false)

  if(fontsLoaded){
      return (
    <Home/>
  );
  }else{
    return(
      <AppLoading
      startAsync={getFonts()}
      onFinish={()=> setFontsLoaded(true)}
      />
    )
  }

}
