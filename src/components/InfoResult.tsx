import { View, Text } from "react-native";
import { ResultDescription } from "./ResultDescription";
import { NutritionalStatus } from "../app/Result";

interface tableLimitProps {
  underLimit: number;
  normalLimit: number;
  overwightLimit: number;
  obesityLimit: number;
  obesityTowLimit?: number;
  obesityThreeLimit?: number;
}

interface InfoResultProps {
  bmi: string
  data: tableLimitProps
  resultado: NutritionalStatus
  onPress: () => void
}

export function InfoResult({bmi, data, resultado, onPress} : InfoResultProps) {
  const bottom = data["underLimit"]
  const quite = data["overwightLimit"]
  const higher = data["obesityThreeLimit"] ? data["obesityThreeLimit"] : data["obesityLimit"] * 1.2

  const BmiNumber = Number(bmi)
  let point = 0
  if (BmiNumber < bottom) {
    point = (BmiNumber / bottom) * 30
  } else if (BmiNumber <= quite) {
    point = 30 + ((BmiNumber - bottom) / (quite - bottom)) * 40
  } else  if (BmiNumber < higher) {
    point = 70 + ((BmiNumber - quite) / (higher - quite)) * 28
  } else {
    point = 98
  }

  const markerPosition = point + "%"
  return (
    <View className="mt-6 bg-white p-4 rounded-md shadow-lg">
      <View className="justify-center items-center mt-4 mb-6">
        <Text>Seu IMC é</Text>
        <Text className="font-mulish text-4xl">{bmi}</Text>
      </View>

      <View className="justify-center">
        <View className="w-full h-4 bg-principal-800 rounded-lg" />
        <View className="w-[70%] h-4 bg-principal-600 rounded-lg absolute"/>
        <View className="w-[30%] h-4 bg-principal-300 rounded-lg absolute"/>
        <View className="w-2 h-6 ml-[-4px] bg-slate-800 rounded-lg absolute" style={{left: markerPosition}}/>
      </View>
      <View className="mt-1 mb-8 flex-row justify-between" >
        <Text className="font-mulish-sm text-[12px] text-slate-600">Abaixo do Peso</Text>
        <Text className="font-mulish-sm text-[12px] text-slate-600">Obesidade</Text>
      </View>


      <ResultDescription description={resultado} onPress={onPress}/>

      <View>

      </View>

        <View className="mt-3 justify-center items-center">
          <Text className="text-zinc-500 font-mulish-sm text-sm">75.00 kg | 170 cm | Masculino | 19 anos</Text>
        </View>
    </View>
  );
}
