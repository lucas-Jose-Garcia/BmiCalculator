import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Header } from '../components/Header';

import { Foundation } from '@expo/vector-icons';
import { styled } from "nativewind";

const MaleSymbol = styled(Foundation)

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-200">
      <Header/>
      {/* Form */}
      <View>
        {/* Sexo */}
        <View>
          <View className='items-center border-solid '>
            <MaleSymbol name="male-symbol" size={48} className='text-slate-800' />
            <Text className='font-mulish text-sm text-slate-800'>Masculino</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}