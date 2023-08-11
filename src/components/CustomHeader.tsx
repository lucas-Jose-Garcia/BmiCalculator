import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { StackTypes } from "../routers/stack";
import { useNavigation } from '@react-navigation/native'

interface CustomHeaderProps {
  titulo: string
}

export function CustomHeader({titulo} : CustomHeaderProps) {
  const navigation = useNavigation<StackTypes>()

  return (
    <View className="flex-row items-center gap-2">
      <TouchableOpacity 
        className="p-2 border-solid border-[3px] border-principal-300 rounded-lg"
        onPress={() => {navigation.goBack()}}
      >
        <MaterialIcons name="arrow-back" size={24} color="#6A43F5" />
      </TouchableOpacity>
      <Text className="font-mulish text-2xl">{titulo}</Text>
    </View>
  );
}
