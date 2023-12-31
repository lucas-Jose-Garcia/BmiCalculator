import React from "react";
import { TouchableOpacity, View, Text, Animated } from "react-native";
import Selected from '../assets/selected.svg';
import { Foundation } from '@expo/vector-icons';
import { styled } from "nativewind";

const Symbol = styled(Foundation)

interface Props {
    text: "Masculino" | "Feminino",
    activate: boolean,
    onPress: () => void,
}

export function Card({text, activate, onPress}: Props) {
    const colorVariantes = {
        'active': 'text-slate-800',
        'disabled': 'text-zinc-400'
    }
    return (
        <View className="flex-1 justify-center items-center">
            <TouchableOpacity onPress={onPress} className={`${activate ? 'bg-zinc-100' : 'bg-zinc-300'} w-[150px] h-[110px] flex-row items-center justify-center p-4 shadow rounded-2xl`}>
            <View className='items-center w-20'>
              <Symbol name={`${text == 'Masculino' ? 'male' : 'female'}-symbol`} size={56} className={`${colorVariantes[activate ? 'active' : 'disabled']}`} />
              <Text className={`${colorVariantes[activate ? 'active' : 'disabled']} font-mulish text-sm text-slate-800 mt-[-4px]`}>{text}</Text>
            </View>
            {activate ? (
            <View className='h-full mr-[-20px] mt-[-8px]'>
                <Selected />
            </View>
            ) : ''}
            
          </TouchableOpacity>
        </View>
    )
}