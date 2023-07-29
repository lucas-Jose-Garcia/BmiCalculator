import { Text, View, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React from "react";

interface ExplainResultProps {
    resultado: "Normal",
}

const explanations = {
    "Normal": "Peso corporal dentro da faixa considerada saudável para a altura, indicando equilíbrio nutricional e proporção adequada entre massa muscular e gordura. Menor risco de problemas de saúde relacionados ao peso."
}

export function ExplainResult({resultado}: ExplainResultProps) {
    return (
    <View className="items-center mt-8 bg-zinc-200 rounded-md shadow-md shadow-zinc-400">
        <Text className="p-3 font-mulish-sm text-justify text-zinc-700">{explanations[resultado]}</Text>
        <TouchableOpacity className="flex-row items-center gap-1 mb-4 bl">
            <AntDesign name="questioncircleo" size={18} color="#52525b" />
            <Text className="text-zinc-600 font-mulish">Como o IMC é calculado?</Text>
        </TouchableOpacity>
    </View>
    )
}