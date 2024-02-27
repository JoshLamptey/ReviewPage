import { StatusBar } from 'expo-status-bar';
import  React,{useEffect } from 'react';
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/home';
import About from './screens/about';




export default function App() {  
  const [FontsLoaded]= useFonts({
    "Roboto Medium" : require("./assets/Font/Roboto Medium.ttf"),
    "Roboto Medium" : require("./assets/Font/Roboto Regular.ttf")
  })

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  },[])

  if(!FontsLoaded){
    return undefined
  }else{
    SplashScreen.hideAsync()
  }

  return(
    <Home/>
  )
}
