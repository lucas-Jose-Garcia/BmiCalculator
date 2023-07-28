import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {  useFonts, Mulish_800ExtraBold } from '@expo-google-fonts/mulish';
import Home from './src/app/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Mulish_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Home />
  );
}
