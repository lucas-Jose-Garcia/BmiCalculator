import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';

import Selected from '../assets/selected.svg';
import { Foundation } from '@expo/vector-icons';
import { styled } from "nativewind";
import { Card } from '../components/Card';

const MaleSymbol = styled(Foundation)

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-200">
      <Header/>
      {/* Form */}
      <View>
        {/* Sexo */}
        <View>
          <Card text="Masculino" activate={true} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}