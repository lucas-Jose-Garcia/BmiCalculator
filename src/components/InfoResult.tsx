import { View, Text } from "react-native";
import { ResultDescription } from "./ResultDescription";

interface tableLimitProps {
  underLimit: number;
  normalLimit: number;
  overwightLimit: number;
  obesityLimit: number;
  obesityTowLimit?: number;
  obesityThreeLimit?: number;
}

interface InfoResultProps {
  bmi: number
  data: tableLimitProps
  onPress: () => void
}

export function InfoResult({bmi, data, onPress} : InfoResultProps) {
  const bottom = data["underLimit"]/1.5
  const quite = data["normalLimit"]
  const higher = data["obesityThreeLimit"] ? data["obesityThreeLimit"] : data["obesityLimit"]

  const limitOfNormal = (quite * 100 / higher) + "%"
  const limitOfBottom = (bottom * 100 / higher) + "%"
  const markerPosition = bmi > higher ? "98%" : (bmi * 100 / higher) + "%"

  return (
    <View className="mt-6 bg-white p-4 rounded-md shadow-lg">
      <View className="justify-center items-center mt-4 mb-6">
        <Text>Seu IMC é</Text>
        <Text className="font-mulish text-4xl">{bmi}</Text>
      </View>

      <View className="mb-8 justify-center">
        <View className="w-full h-4 bg-principal-800 rounded-lg" />
        <View className="h-4 bg-principal-600 rounded-lg absolute" style={{width: limitOfNormal}}/>
        <View className="h-4 bg-principal-300 rounded-lg absolute" style={{width: limitOfBottom}}/>
        <View className="w-2 h-6 bg-slate-800 rounded-lg absolute" style={{left: markerPosition}}/>
      </View>

      <ResultDescription description="Normal" onPress={onPress}/>

      <View>

      </View>

        <View className="mt-3 justify-center items-center">
          <Text className="text-zinc-500 font-mulish-sm text-sm">75.00 kg | 170 cm | Masculino | 19 anos</Text>
        </View>
    </View>
  );
}
