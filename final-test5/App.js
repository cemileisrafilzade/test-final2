import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen, Login, SignUp } from './screens';
import { AppLoading } from 'expo';
import { loadFonts } from './styles/fonts';
import { RootDrawer } from './navigation/RootDrawer';
export default function App() {
  
  const [loaded,setLoaded] = useState(false);
  if(!loaded){
    return(
      <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)}/>
    );
  }
  
  return    <RootDrawer/>;

}

