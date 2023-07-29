import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ResultDescriptionProps {
    description: string
}

export function ResultDescription({description}: ResultDescriptionProps) {
  return (
    <View className="flex-row w-full justify-center">
      <TouchableOpacity
        className="p-2 rounded-lg bg-principal-600"
        activeOpacity={0.7}
      >
        <View className="flex-row justify-center items-center gap-2">
          <MaterialIcons name="table-rows" size={18} color="#fff" />
          <Text className="font-mulish text-zinc-50 mr-2">{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
