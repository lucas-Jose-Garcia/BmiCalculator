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
          <Card text="Masculino" />
          {/* <TouchableOpacity className='w-[150px] h-[110px] flex-row items-center justify-center bg-white p-4 shadow rounded-2xl'>
            <View className='items-center'>
              <MaleSymbol name="male-symbol" size={56} className='text-slate-800' />
              <Text className='font-mulish text-sm text-slate-800 mt-[-4px]'>Masculino</Text>
            </View>
            <View className='h-full mr-[-20px] mt-[-8px]'>
              <Selected />
            </View>
          </TouchableOpacity> */}
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}