import { View, Text } from "react-native";
import { ResultDescription } from "./resultDescription";

export function InfoResult() {
  return (
    <View className="mt-6 bg-white p-4 rounded-md shadow-lg">
      <View className="justify-center items-center mt-4 mb-6">
        <Text>Seu IMC é</Text>
        <Text className="font-mulish text-4xl">19.5</Text>
      </View>

      <View className="mb-8">
        <View className="w-full h-4 bg-principal-600 rounded-lg" />
      </View>

      <ResultDescription description="Obesidade" />

        <View className="mt-3 justify-center items-center">
          <Text className="text-zinc-500 font-mulish-sm text-sm">75.00 kg | 170 cm | Masculino | 19 anos</Text>
        </View>
    </View>
  );
}
