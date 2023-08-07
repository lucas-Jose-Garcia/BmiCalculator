import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NutritionalStatus } from "../app/Result";

interface ResultDescriptionProps {
    description: NutritionalStatus
    onPress: () => void
}

export function ResultDescription({description, onPress}: ResultDescriptionProps) {
  return (
    <View className="flex-row w-full justify-center">
      <TouchableOpacity
        className="p-2 rounded-lg bg-principal-600"
        activeOpacity={0.7}
        onPress={onPress}
      >
        <View className="flex-row justify-center items-center gap-2">
          <MaterialIcons name="table-rows" size={18} color="#fff" />
          <Text className="font-mulish text-zinc-50 mr-2">{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
