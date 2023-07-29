import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {  useFonts, Mulish_800ExtraBold, Mulish_400Regular } from '@expo-google-fonts/mulish';
import { Home } from './src/app/Home';
import { Result } from './src/app/Result';
import { StatusBar } from 'expo-status-bar';

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
      <Result />

      <StatusBar style="auto" backgroundColor='#fafafa'/>
    </View>
  );
}
