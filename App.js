import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Home from "./screens/home";
import ReviewNavigator from './navigation/reviewNavigator';

const loadFonts = () => {
  return Font.loadAsync({
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunitobold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
};

export default function App() {
  const [isLoading,setIsLoading] = useState(true);
  if(isLoading){
    return <AppLoading startAsync={loadFonts} onFinish={() => {setIsLoading(false)}}/>
  }
  return (
    <ReviewNavigator/>
  );
}

