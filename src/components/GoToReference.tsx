import React from "react"
import { Linking, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';


interface ButtonProps {
    caption: string
    url: string
}

async function OpenLinking(url: string) {
  await Linking.openURL(url)
}

export function GoToReference({caption, url} : ButtonProps) {
    return (
      <TouchableOpacity onPress={() => {OpenLinking(url)}}>
        <View className="flex flex-row justify-items-center items-center mt-3 mb-3 gap-2">
            <FontAwesome5 name="external-link-alt" size={12} color="#0e0e0e" />
            <Text className="text-zinc-500 font-mulish-sm text-base text-justify">{caption}</Text>
        </View>
      </TouchableOpacity>
    )
}