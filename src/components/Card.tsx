import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import Selected from '../assets/selected.svg';
import { Foundation } from '@expo/vector-icons';
import { styled } from "nativewind";

const MaleSymbol = styled(Foundation)

export function Card() {

    return (
        <TouchableOpacity className='w-[150px] h-[110px] flex-row items-center justify-center bg-white p-4 shadow rounded-2xl'>
            <View className='items-center'>
              <MaleSymbol name="male-symbol" size={56} className='text-slate-800' />
              <Text className='font-mulish text-sm text-slate-800 mt-[-4px]'>Masculino</Text>
            </View>
            <View className='h-full mr-[-20px] mt-[-8px]'>
              <Selected />
            </View>
          </TouchableOpacity>
    )
}