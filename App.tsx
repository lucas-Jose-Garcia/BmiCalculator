import React from 'react';
import { View } from 'react-native';
import {  useFonts, Mulish_800ExtraBold, Mulish_400Regular } from '@expo-google-fonts/mulish';
import { StatusBar } from 'expo-status-bar';
import { StackComponent } from './src/routers/stack';
import { StateProvider } from './src/context';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {
  let [fontsLoaded] = useFonts({
    Mulish_800ExtraBold,
    Mulish_400Regular
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 mt-7 p-5 bg-zinc-50">
      <StateProvider>
        <StackComponent />
        <StatusBar style="auto" backgroundColor='#fafafa'/>
      </StateProvider>
      <Toast />
    </View>
  );
}
